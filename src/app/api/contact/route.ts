import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to Muhammad Irfan (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "raiirfan1999@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject || "New Contact Request"} — from ${name}`,
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7C3AED, #06B6D4); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Contact Request 🚀</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">Someone reached out via your portfolio</p>
          </div>
          <div style="padding: 32px; background: #111111;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #7C3AED; text-decoration: none; font-size: 15px;">${email}</a></td>
              </tr>
              ${subject ? `
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">${subject}</td>
              </tr>` : ""}
              ${budget ? `
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Budget</td>
                <td style="padding: 12px 0; color: #06B6D4; font-size: 15px; font-weight: 600;">${budget}</td>
              </tr>` : ""}
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05);">
              <a href="mailto:${email}?subject=Re: ${subject || "Your inquiry"}" 
                 style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #7C3AED, #06B6D4); color: #ffffff; text-decoration: none; border-radius: 50px; font-size: 13px; font-weight: 700; letter-spacing: 0.5px;">
                Reply to ${name} →
              </a>
            </div>
          </div>
          <div style="padding: 20px 32px; background: #0a0a0a; text-align: center; color: rgba(255,255,255,0.3); font-size: 11px;">
            Sent from Muhammad Irfan&apos;s Portfolio — raiirfan1999@gmail.com
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Muhammad Irfan" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 🚀`,
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7C3AED, #06B6D4); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">Thanks for reaching out! 👋</h1>
          </div>
          <div style="padding: 32px; background: #111111;">
            <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.8; margin: 0 0 20px;">Hi <strong>${name}</strong>,</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.8; margin: 0 0 20px;">
              Thank you for contacting me! I've received your message and will get back to you within <strong style="color: #7C3AED;">24–48 hours</strong>.
            </p>
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.8; margin: 0 0 28px;">
              I look forward to discussing your project and exploring how I can help build something exceptional for your business.
            </p>
            <div style="padding: 20px; background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.2); border-radius: 12px; margin-bottom: 28px;">
              <p style="margin: 0; color: rgba(255,255,255,0.5); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Your message:</p>
              <p style="margin: 0; color: rgba(255,255,255,0.75); font-size: 13px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 0;">
              Best regards,<br/>
              <strong style="color: #ffffff;">Muhammad Irfan</strong><br/>
              <span style="color: #7C3AED;">Senior Full Stack WordPress Developer</span>
            </p>
          </div>
          <div style="padding: 20px 32px; background: #0a0a0a; text-align: center; color: rgba(255,255,255,0.3); font-size: 11px;">
            📧 raiirfan1999@gmail.com &nbsp;|&nbsp; 📱 +92 (303) 797-6657
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
