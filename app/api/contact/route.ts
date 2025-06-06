import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      propertyAddress, 
      propertyType, 
      services, 
      timeline, 
      budget, 
      details 
    } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New Project Inquiry - MF Property Studios

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Property Details:
- Address: ${propertyAddress || 'Not provided'}
- Property Type: ${propertyType || 'Not specified'}
- Timeline: ${timeline || 'Not specified'}
- Budget: ${budget || 'Not specified'}

Services Requested:
${services && services.length > 0 ? services.join(', ') : 'Not specified'}

Additional Details:
${details || 'No additional details provided'}

---
Sent from MF Property Studios contact form
Time: ${new Date().toLocaleString()}
    `.trim();

    // Log the inquiry (in production, you'd save to database or send email)
    console.log('New contact form submission:', {
      name,
      email,
      propertyType,
      services,
      timestamp: new Date().toISOString()
    });

    // In production, you would integrate with:
    // - Email service (SendGrid, Resend, AWS SES)
    // - CRM system (HubSpot, Salesforce)
    // - Database (to store inquiries)
    
    // For now, we'll simulate a successful response
    // TODO: Replace with actual email sending logic
    /*
    Example with Resend:
    
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'MF Property Studios <contact@mfpropertystudios.com>',
      to: ['info@mfpropertystudios.com'],
      subject: `New Project Inquiry from ${name}`,
      text: emailContent,
      reply_to: email,
    });
    */

    return NextResponse.json(
      { 
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
} 