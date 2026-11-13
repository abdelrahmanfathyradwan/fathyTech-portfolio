import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please share a brief project description (at least 10 characters)." },
        { status: 400 }
      );
    }

    const inquiry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      projectType: projectType || "Not specified",
      budget: budget || "Not specified",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    console.log("[INQUIRY_RECEIVED]:", JSON.stringify(inquiry, null, 2));

    // If an external webhook (e.g. n8n or Slack or Formspree or Resend) is configured in environment:
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiry),
        });
      } catch (err) {
        console.error("[CONTACT_WEBHOOK_ERROR]:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Your message has been logged securely and I will get back to you promptly.",
        inquiryId: `INQ-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message. Please try again or reach out via LinkedIn/GitHub." },
      { status: 500 }
    );
  }
}

