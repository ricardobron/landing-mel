'use client';

import { useState } from 'react';
export function ContactForm() {
  const [sent, setSent] = useState(false);
  return sent ? (
    <div className="rounded-2xl border border-brand-bg bg-primary p-6 text-2xl">
      <p> Obrigado!</p>
      <span> Entraremos em contacto em breve.</span>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-3"
    >
      <input
        required
        placeholder="Nome"
        className="rounded-xl border px-4 py-3"
      />
      <input
        required
        type="email"
        placeholder="Email"
        className="rounded-xl border px-4 py-3"
      />
      <textarea
        rows={4}
        placeholder="Mensagem"
        className="rounded-xl border px-4 py-3"
      />
      <button className="rounded-2xl bg-primary-600 text-white px-5 py-3">
        Enviar
      </button>
    </form>
  );
}
