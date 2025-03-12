# Deployment Guide

## Overview

This portfolio website is deployed using Vercel, optimized for Next.js applications with a focus on maintaining excellent Core Web Vitals scores and optimal image delivery.

## Prerequisites

1. **Version Control**
   - GitHub account
   - Repository access
   - Clean git history

2. **Accounts Required**
   - Vercel account
   - Domain registrar access
   - Google Analytics (optional)

3. **Development Environment**
   - Node.js >= 18.17.0
   - npm >= 9.0.0
   - Vercel CLI

## Deployment Process

### 1. Initial Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link project
vercel link
```

### 2. Environment Configuration

Create `.env.production` with the following variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-ga-id
NODE_ENV=production
```

### 3. Vercel Configuration

Create `vercel.json` in the project root:
```json
{
  "version": 2,
  "builds": [{
    "src": "package.json",
    "use": "@vercel/next",
    "config": {
      "maxDuration": 60,
      "memory": 3008
    }
  }],
  "images": {
    "sizes": [640, 1024, 1920],
    "formats": ["image/webp"],
    "minimumCacheTTL": 60
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 4. Core Web Vitals Optimization

1. **Image Optimization**
   - Using Next.js Image component with proper sizing
   - WebP format with PNG fallback
   - Responsive sizes configuration
   - Blur placeholders for better UX

2. **Font Loading**
   - Preload critical fonts
   - Font-display: swap implementation
   - Local font fallbacks

3. **JavaScript Optimization**
   - Dynamic imports for heavy components
   - Route-based code splitting
   - Deferred non-critical operations

### 5. Deployment Commands

```bash
# Deploy to preview (development)
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# Rollback to previous deployment
vercel rollback

# Add custom domain
vercel domains add your-domain.com
```

### 6. Monitoring

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor Core Web Vitals
   - Track real user metrics

2. **Error Tracking**
   - Configure error boundaries
   - Set up error logging
   - Enable error notifications

3. **Performance Monitoring**
   - Core Web Vitals dashboard
   - Custom performance metrics
   - User behavior analytics

### 7. Rollback Procedures

1. **Quick Rollback**
   ```bash
   vercel rollback
   ```

2. **Specific Version**
   ```bash
   # List deployments
   vercel ls

   # Deploy specific version
   vercel deploy --target production <deployment-id>
   ```

### 8. Security Measures

1. **SSL Configuration**
   - Automatic SSL certificates
   - HSTS implementation
   - Security headers

2. **Access Control**
   - Team member permissions
   - Production deployment protection
   - Environment variable encryption

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version
   - Verify dependencies
   - Review build logs

2. **Performance Issues**
   - Monitor Core Web Vitals
   - Check image optimization
   - Review bundle size

3. **Domain Issues**
   - Verify DNS configuration
   - Check SSL status
   - Review domain settings

## Maintenance

### Regular Tasks

1. **Weekly**
   - Monitor Core Web Vitals
   - Check error logs
   - Review performance metrics

2. **Monthly**
   - Update dependencies
   - Review security patches
   - Backup deployment configuration

3. **Quarterly**
   - Full performance audit
   - Security assessment
   - Infrastructure review

## Support

For deployment issues:
1. Check Vercel status: https://www.vercel-status.com/
2. Review Vercel documentation: https://vercel.com/docs
3. Contact Vercel support: https://vercel.com/support
