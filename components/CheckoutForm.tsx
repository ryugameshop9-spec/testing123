"use client";

import { useState, type FormEvent } from "react";

export default function CheckoutForm({ product }: { product: any }) {
  const [form, setForm] = useState({ customer_name: "", customer_whatsapp: "", customer_note: "" });
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/generate-whatsapp-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, ...form })
    });
    if (!res.ok) {
      setError("Gagal membuat link WhatsApp. Periksa input Anda.");
      return;
    }
    const data = await res.json();
    window.location.href = data.link;
  }

  return (
    <form onSubmit={submit} className="space-y-3 bg-card p-4 rounded-xl border border-white/10">
      <input required className="w-full p-2 bg-black/30 rounded" placeholder="Nama" onChange={(e) => setForm({ ...form, customer_name: e.target.value })} />
      <input required className="w-full p-2 bg-black/30 rounded" placeholder="No WhatsApp (62xxxxxxxx)" onChange={(e) => setForm({ ...form, customer_whatsapp: e.target.value })} />
      <textarea className="w-full p-2 bg-black/30 rounded" placeholder="Catatan tambahan" onChange={(e) => setForm({ ...form, customer_note: e.target.value })} />
      <button className="w-full bg-green-600 hover:bg-green-500 py-2 rounded font-semibold">Order via WhatsApp</button>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  );
}
