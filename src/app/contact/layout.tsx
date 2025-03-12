import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Christopher Holzheu',
  description: 'Get in touch with Christopher Holzheu. Whether you have a project in mind or just want to connect, I\'d love to hear from you.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
