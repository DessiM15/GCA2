"use client";

import { useState, type FormEvent } from "react";
import { useTranslation } from "@/i18n";

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <svg className="mx-auto h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-3 text-lg font-semibold text-green-800">{t("ctaForm.thankYou")}</p>
        <p className="mt-1 text-sm text-green-700">{t("ctaForm.thankYouMessage")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-navy focus:ring-0 outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="cta-name" className="block text-xs font-medium tracking-wider uppercase text-gray-500 mb-1">
          {t("ctaForm.nameLabel")} <span className="text-red-400">*</span>
        </label>
        <input type="text" id="cta-name" name="name" required className={inputClass} placeholder={t("ctaForm.namePlaceholder")} />
      </div>
      <div>
        <label htmlFor="cta-email" className="block text-xs font-medium tracking-wider uppercase text-gray-500 mb-1">
          {t("ctaForm.emailLabel")} <span className="text-red-400">*</span>
        </label>
        <input type="email" id="cta-email" name="email" required className={inputClass} placeholder={t("ctaForm.emailPlaceholder")} />
      </div>
      <div>
        <label htmlFor="cta-phone" className="block text-xs font-medium tracking-wider uppercase text-gray-500 mb-1">
          {t("ctaForm.phoneLabel")}
        </label>
        <input type="tel" id="cta-phone" name="phone" className={inputClass} placeholder={t("ctaForm.phonePlaceholder")} />
      </div>
      <div>
        <label htmlFor="cta-company" className="block text-xs font-medium tracking-wider uppercase text-gray-500 mb-1">
          {t("ctaForm.companyLabel")}
        </label>
        <input type="text" id="cta-company" name="company" className={inputClass} placeholder={t("ctaForm.companyPlaceholder")} />
      </div>
      <div>
        <label htmlFor="cta-message" className="block text-xs font-medium tracking-wider uppercase text-gray-500 mb-1">
          {t("ctaForm.messageLabel")} <span className="text-red-400">*</span>
        </label>
        <textarea id="cta-message" name="message" required rows={3} className={`${inputClass} resize-y`} placeholder={t("ctaForm.messagePlaceholder")} />
      </div>
      <button type="submit" className="w-full bg-navy py-4 text-sm font-semibold tracking-wide uppercase text-white hover:bg-navy-light transition-colors">
        {t("ctaForm.submit")}
      </button>
    </form>
  );
}
