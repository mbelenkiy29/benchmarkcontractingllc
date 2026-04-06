import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.USESEND_API_KEY;
  const fromEmail = process.env.USESEND_FROM_EMAIL || "noreply@benchmarkcontractingllc.com";
  if (!apiKey) {
    console.error("USESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
    <h3>Message:</h3>
    <p>${message}</p>
  `;

  const textBody = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nProject Type: ${projectType || "Not specified"}\n\nMessage:\n${message}`;

  try {
    const response = await fetch("https://app.usesend.com/api/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        to: ["info@benchmarkcontractingllc.com"],
        from: fromEmail,
        replyTo: [email],
        subject: `New Inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("UseSend error:", response.status, errorData);
      return res.status(502).json({ error: "Failed to send email", detail: errorData });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
