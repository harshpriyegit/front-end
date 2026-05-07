import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, country, service, description } = body;

    // Log to check if env variables are loaded
    console.log('Environment check:');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS exists:', !!process.env.SMTP_PASS);
    console.log('BUSINESS_EMAIL:', process.env.BUSINESS_EMAIL);

    // Validate required fields
    if (!fullName || !email || !phone || !country || !service || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if environment variables exist
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP credentials in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    console.log('Creating transporter...');

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: true, // Enable debug output
      logger: true, // Log information
    });

    console.log('Verifying transporter...');
    
    // Verify connection
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Email to you (business owner)
    const mailToYou = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      to: process.env.BUSINESS_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { padding: 10px; background: #f9f9f9; border-left: 3px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">🌍 Country:</div>
                <div class="value">${country}</div>
              </div>
              <div class="field">
                <div class="label">🛠️ Service Interested:</div>
                <div class="value">${service}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${description.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to customer (confirmation)
    const mailToCustomer = {
      from: `"Digitrix Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Digitrix Solutions!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; }
            .message-box { padding: 15px; background: #f0f4ff; border-left: 4px solid #667eea; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${fullName}! 🙏</h1>
            </div>
            <div class="content">
              <p>We've received your message and appreciate you reaching out to us.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your inquiry</li>
                <li>We'll get back to you within 24 hours</li>
                <li>You'll receive a personalized response</li>
              </ul>

              <div class="message-box">
                <strong>Your Message:</strong><br>
                ${description.replace(/\n/g, '<br>')}
              </div>

              <p><strong>Service Interested:</strong> ${service}</p>

              <p>If you have any urgent questions, feel free to call us at <strong>+91 8810550522</strong></p>

              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

              <p style="font-size: 14px; color: #666;">
                Best regards,<br>
                <strong>Digitrix Solutions Team</strong><br>
                📍 Tilak Nagar , New Delhi , 110018 <br>
                📧 info@digitrixsolutions.in<br>
                📞 +91 8810550522
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('Sending email to business...');
    await transporter.sendMail(mailToYou);
    console.log('Business email sent successfully');

    console.log('Sending confirmation email to customer...');
    await transporter.sendMail(mailToCustomer);
    console.log('Customer email sent successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error) {
    console.error('Detailed error in contact API:', error);
    
    // Log specific error details
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}