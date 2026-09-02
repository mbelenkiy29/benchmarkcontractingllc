import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Attachment {
  filename: string;
  content: string;
  contentType?: string;
}

const MAX_ATTACHMENTS = 10;
// Vercel caps the request body at 4.5 MB (413 FUNCTION_PAYLOAD_TOO_LARGE).
// Reject well before that so the client gets a clean error instead.
const MAX_ATTACHMENT_CHARS = 6 * 1024 * 1024;

function parseAttachments(raw: unknown): Attachment[] | null {
  if (raw === undefined || raw === null) return [];
  if (!Array.isArray(raw) || raw.length > MAX_ATTACHMENTS) return null;

  const result: Attachment[] = [];
  let totalChars = 0;
  for (const item of raw) {
    if (!item || typeof item !== "object") return null;
    const { filename, content, contentType } = item as Record<string, unknown>;
    if (typeof filename !== "string" || filename.length === 0) return null;
    if (typeof content !== "string" || content.length === 0) return null;
    if (contentType !== undefined && typeof contentType !== "string") return null;
    totalChars += content.length;
    if (totalChars > MAX_ATTACHMENT_CHARS) return null;
    result.push({ filename, content, contentType });
  }
  return result;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body: Record<string, unknown>;
  try {
    body = (req.body ?? {}) as Record<string, unknown>;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const { name, email, phone, projectType, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const attachments = parseAttachments(body.attachments);
  if (attachments === null) {
    return res.status(400).json({ error: "Invalid attachments" });
  }

  const apiKey = process.env.USESEND_API_KEY;
  const fromEmail = process.env.USESEND_FROM_EMAIL || "noreply@benchmarkcontractingllc.com";
  if (!apiKey) {
    console.error("USESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const attachmentNote =
    attachments.length > 0
      ? `<p><strong>Attachments:</strong> ${attachments.length} file(s)</p>`
      : "";

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
    ${attachmentNote}
    <h3>Message:</h3>
    <p>${message}</p>
  `;

  const textBody = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nProject Type: ${projectType || "Not specified"}\nAttachments: ${attachments.length}\n\nMessage:\n${message}`;

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
        ...(attachments.length > 0
          ? {
              attachments: attachments.map((a) => ({
                filename: a.filename,
                content: a.content,
              })),
            }
          : {}),
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
