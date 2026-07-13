import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Next.js Route Handlers are deployed as Vercel Serverless Functions.
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ message: "Geçersiz form verisi." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const website = String(body.website ?? "").trim();

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (
    name.length < 2 || name.length > 80 ||
    !EMAIL_PATTERN.test(email) || email.length > 120 ||
    subject.length < 2 || subject.length > 120 ||
    message.length < 10 || message.length > 1500
  ) {
    return NextResponse.json({ message: "Lütfen tüm alanları geçerli şekilde doldurun." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "nihatavsarr@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { message: "E-posta servisi henüz yapılandırılmadı. Lütfen daha sonra tekrar deneyin." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactEmail],
      reply_to: email,
      subject: `Portfolyo mesajı: ${subject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    console.error("Resend e-posta isteği başarısız oldu.", {
      status: response.status,
      message: typeof error?.message === "string" ? error.message : "Bilinmeyen hata",
    });

    return NextResponse.json({ message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
