"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const FORM_ENDPOINT = "https://formspree.io/f/xjkajokk";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t } = useLocale();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = await response.json().catch(() => null);
      setStatus("error");
      setErrorMessage(
        data?.error || t.contact.form.error
      );
    } catch (error) {
      console.error("Form submit error", error);
      setStatus("error");
      setErrorMessage(t.contact.form.error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-brand-charcoal">
          {t.contact.form.name}*
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder={t.contact.form.namePlaceholder}
          className="rounded-lg border border-black/10 px-4 py-2.5 text-sm text-brand-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-brand-charcoal">
          {t.contact.form.email}*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t.contact.form.emailPlaceholder}
          className="rounded-lg border border-black/10 px-4 py-2.5 text-sm text-brand-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-brand-charcoal">
          {t.contact.form.phone}*
        </label>
        <input
          id="phone"
          name="phone"
          required
          placeholder={t.contact.form.phonePlaceholder}
          className="rounded-lg border border-black/10 px-4 py-2.5 text-sm text-brand-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <label htmlFor="arrival" className="text-sm font-medium text-brand-charcoal">
            {t.contact.form.arrival}
          </label>
          <input
            id="arrival"
            name="arrival"
            type="date"
            className="rounded-lg border border-black/10 px-4 py-2.5 text-sm text-brand-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="departure" className="text-sm font-medium text-brand-charcoal">
            {t.contact.form.departure}
          </label>
          <input
            id="departure"
            name="departure"
            type="date"
            className="rounded-lg border border-black/10 px-4 py-2.5 text-sm text-brand-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-charcoal">
          {t.contact.form.message}*
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t.contact.form.messagePlaceholder}
          className="rounded-lg border border-black/10 px-4 py-2.5 text-sm text-brand-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary justify-center"
        disabled={status === "loading"}
      >
        {status === "loading" ? t.contact.form.submitting : t.contact.form.submit}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-brand-forest/10 p-4 text-sm text-brand-forest">
          {t.contact.form.success}
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-100 p-4 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
