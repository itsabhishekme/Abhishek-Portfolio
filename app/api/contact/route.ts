import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error("CONTACT_EMAIL is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Recipient email is not configured.",
        },
        { status: 500 }
      );
    }

    // Create Resend client only after validation
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>New Portfolio Contact</h2>

          <hr />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>

          <hr />

          <small>
            This email was sent from your Portfolio Contact Form.
          </small>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Contact API is running.",
    },
    { status: 200 }
  );
}