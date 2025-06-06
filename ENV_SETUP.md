# Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

## Analytics (Optional)
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
Get this from Google Analytics 4 when you set up tracking for your website.

## Email Service (For Contact Forms)
Choose one of these options:

### Option 1: Resend (Recommended)
```
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=contact@yourdomain.com
```

### Option 2: SendGrid
```
SENDGRID_API_KEY=SG.xxxxxxxxx
SENDGRID_FROM_EMAIL=contact@yourdomain.com
```

### Option 3: Nodemailer (SMTP)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

## Sanity CMS (When you're ready to add CMS)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token
```

## Cloudinary (When you're ready for image optimization)
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_BUSINESS_EMAIL=info@yourdomain.com
NEXT_PUBLIC_BUSINESS_PHONE=+1234567890
```

## Security (For production)
```
NEXTAUTH_SECRET=your-random-secret-key
NEXTAUTH_URL=https://yourdomain.com
```

## How to Set Up Each Service

### 1. Google Analytics (Free)
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Get the Measurement ID (starts with G-)
4. Add it to your `.env.local` file

### 2. Email Service Setup

#### Resend (Recommended - $0/month for 3,000 emails)
1. Sign up at [Resend](https://resend.com/)
2. Verify your domain or use their test domain
3. Generate an API key
4. Update the contact API route to use Resend

#### SendGrid (Free tier: 100 emails/day)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Verify your sender identity
3. Generate an API key
4. Update the contact API route to use SendGrid

### 3. Domain Setup
1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. Update all environment variables with your actual domain
3. Update the sitemap and robots.txt files

### 4. Deployment
1. Deploy to Vercel: `npx vercel --prod`
2. Add environment variables in Vercel dashboard
3. Connect your custom domain

## Important Notes

- Never commit `.env.local` to Git
- Use different values for production vs development
- Test contact forms thoroughly before going live
- Set up email notifications for form submissions 