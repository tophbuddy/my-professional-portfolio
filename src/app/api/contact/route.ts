import { NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

// In-memory store for rate limiting
// In production, use Redis or similar for distributed systems
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();

// Contact form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Check rate limit for an IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requestData = ipRequestCounts.get(ip);

  if (!requestData) {
    ipRequestCounts.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    ipRequestCounts.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (requestData.count >= MAX_REQUESTS) {
    return false;
  }

  requestData.count += 1;
  return true;
}

// Clean up old rate limit entries
function cleanupRateLimits() {
  const now = Date.now();
  for (const [ip, data] of ipRequestCounts.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      ipRequestCounts.delete(ip);
    }
  }
}

export async function POST(request: Request) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Clean up old rate limit entries periodically
    cleanupRateLimits();

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Prepare email
    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL || '',
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
