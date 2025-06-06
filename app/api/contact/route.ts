import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    // Send email notification using Resend
    try {
      // Initialize Resend only when needed and if API key is available
      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY not configured. Emails will not be sent.');
        return NextResponse.json(
          { 
            message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
            success: true 
          },
          { status: 200 }
        );
      }

      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: 'MF Property Studios <contact@mfpropertystudios.com>',
        to: [process.env.BUSINESS_EMAIL || 'info@mfpropertystudios.com'],
        subject: `🏠 New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2D3748; border-bottom: 2px solid #D69E2E; padding-bottom: 10px;">
              New Project Inquiry - MF Property Studios
            </h2>
            
            <div style="background: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2D3748; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            </div>

            <div style="background: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2D3748; margin-top: 0;">Property Details</h3>
              <p><strong>Address:</strong> ${propertyAddress || 'Not provided'}</p>
              <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
              <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            </div>

            <div style="background: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2D3748; margin-top: 0;">Services Requested</h3>
              <p>${services && services.length > 0 ? services.join(', ') : 'Not specified'}</p>
            </div>

            ${details ? `
            <div style="background: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2D3748; margin-top: 0;">Additional Details</h3>
              <p>${details}</p>
            </div>
            ` : ''}

            <div style="text-align: center; padding: 20px; background: #2D3748; color: white; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;">
                📧 Reply directly to this email to respond to ${name}<br>
                🕒 Received: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
        replyTo: email,
      });

      // Send confirmation email to client
      await resend.emails.send({
        from: 'MF Property Studios <contact@mfpropertystudios.com>',
        to: [email],
        subject: '✅ Thank you for your inquiry - MF Property Studios',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #2D3748 0%, #4A5568 100%); color: white; border-radius: 8px;">
              <h1 style="margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
              <p style="margin: 20px 0 0 0; font-size: 18px; opacity: 0.9;">We've received your project inquiry</p>
            </div>
            
            <div style="padding: 30px 20px;">
              <p style="font-size: 16px; line-height: 1.6; color: #2D3748;">
                Thank you for choosing MF Property Studios for your real estate photography needs! 
                We're excited about the opportunity to showcase your property.
              </p>
              
              <div style="background: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D69E2E;">
                <h3 style="color: #2D3748; margin-top: 0;">What happens next?</h3>
                <ul style="color: #4A5568; line-height: 1.8;">
                  <li>📞 We'll contact you within 24 hours</li>
                  <li>📋 We'll discuss your specific needs and timeline</li>
                  <li>💰 We'll provide a detailed quote</li>
                  <li>📸 We'll schedule your photo session</li>
                </ul>
              </div>

              <div style="background: #2D3748; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
                <h3 style="margin-top: 0; color: #D69E2E;">Questions? Contact us directly:</h3>
                <p style="margin: 10px 0; font-size: 16px;">📞 Phone: (555) 123-4567</p>
                <p style="margin: 10px 0; font-size: 16px;">📧 Email: info@mfpropertystudios.com</p>
              </div>

              <p style="text-align: center; color: #718096; font-size: 14px; margin-top: 30px;">
                MF Property Studios - Transforming Properties into Irresistible Listings
              </p>
            </div>
          </div>
        `,
      });

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with success response even if email fails
      // You might want to log this to a monitoring service
    }

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