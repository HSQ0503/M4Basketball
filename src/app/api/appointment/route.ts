import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  skillLevel: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AppointmentFormData = await request.json();

    const { firstName, lastName, email, phone, age, skillLevel, message } =
      body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !age || !skillLevel) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Format skill level for display
    const skillLevelDisplay: Record<string, string> = {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      "high-level": "High-Level Competitive",
    };

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "M4 Basketball <noreply@m4basketball.com>",
      to: ["m4basket@gmail.com"],
      replyTo: email,
      subject: `New Training Application: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Training Application
          </h1>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #374151; margin-top: 0;">Player Information</h2>
            
            <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p style="margin: 8px 0;"><strong>Age:</strong> ${age}</p>
            <p style="margin: 8px 0;"><strong>Skill Level:</strong> ${skillLevelDisplay[skillLevel] || skillLevel}</p>
          </div>
          
          ${
            message
              ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #374151; margin-top: 0;">Additional Information</h2>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          `
              : ""
          }
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This application was submitted through the M4 Basketball website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
