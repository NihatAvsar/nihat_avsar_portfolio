"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Mesajınız gönderiliyor..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        if (payload?.fallback) {
          const subject = encodeURIComponent(form.subject);
          const body = encodeURIComponent(`Ad Soyad: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`);
          window.location.href = `mailto:nihatavsarr@gmail.com?subject=${subject}&body=${body}`;
          setStatus({ type: "idle", message: "" });
          return;
        }
        throw new Error(payload?.message ?? "Mesaj gönderilemedi.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Mesajınız ulaştı. En kısa sürede dönüş yapacağım." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
      });
    }
  }

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>İLETİŞİM FORMU</span>
        <p>Formu gönderdiğinizde mesajınız doğrudan e-posta adresime iletilir.</p>
      </div>

      <div className="form-row">
        <label>
          Ad Soyad
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Adınızı yazın"
            maxLength={80}
            required
          />
        </label>
        <label>
          E-posta
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="ornek@mail.com"
            maxLength={120}
            required
          />
        </label>
      </div>

      <label>
        Konu
        <input
          type="text"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          placeholder="Proje, iş fırsatı veya görüşme talebi"
          maxLength={120}
          required
        />
      </label>

      <label>
        Mesaj
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Kısaca konuşmak istediğiniz konudan bahsedin..."
          rows={6}
          minLength={10}
          maxLength={1500}
          required
        />
      </label>

      <label className="honeypot-field" aria-hidden="true">
        Web sitesi
        <input
          type="text"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="form-submit-row">
        <button className="form-submit" type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? "Gönderiliyor..." : "Mesajı gönder"}
          <span aria-hidden="true">↗</span>
        </button>
        <span className="form-privacy">Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</span>
      </div>

      {status.message && (
        <p className={`form-status ${status.type}`} role="status">{status.message}</p>
      )}
    </form>
  );
}
