"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { isValidEmail } from "@/lib/validators";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <div className="container-x py-16">
      <div className="text-center mb-14 max-w-xl mx-auto">
        <h1 className="section-heading mb-3">Get in Touch</h1>
        <p className="text-navy-500">
          Questions about an order, a product, or anything else? We&apos;re happy to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        {/* Info column */}
        <div className="lg:col-span-2 space-y-7">
          <div className="flex gap-4">
            <Mail size={20} className="text-navy-800 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm mb-1">Email</h3>
              <p className="text-navy-600 text-sm">lionofjudah254@gmail.com</p>
              <p className="text-navy-600 text-sm">lionofjudah254@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone size={20} className="text-navy-800 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm mb-1">Phone</h3>
              <p className="text-navy-600 text-sm">+254 793 692 936</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock size={20} className="text-navy-800 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm mb-1">Operational Hours</h3>
              <p className="text-navy-600 text-sm">Mon – Fri: 7:30 AM – 6:30 PM</p>
              <p className="text-navy-600 text-sm">Saturday: 7:30 AM – 6:30 PM</p>
              <p className="text-navy-600 text-sm">Sunday: Closed</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin size={20} className="text-navy-800 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm mb-1">Location</h3>
              <p className="text-navy-600 text-sm">Beauty Galleria-Junction Stalls, Dubois, Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="bg-navy-50 border border-navy-100 rounded-sm p-8 text-center">
              <h3 className="font-serif text-xl mb-2">Message Sent</h3>
              <p className="text-navy-600 text-sm">
                Thanks, {form.name || "there"} — our team will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-navy-800"
                  placeholder="Jane Wanjiru"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
                    errors.email ? "border-red-400 focus:ring-red-400" : "border-navy-200 focus:ring-navy-800"
                  }`}
                  placeholder="jane@email.com"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-navy-800 resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button type="submit" className="btn-primary flex items-center gap-2">
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Google Map */}
<section className="mt-20">
  <div className="mb-8 text-center">
    <h2 className="section-heading mb-3">Visit Our Store</h2>
    <p className="text-navy-500 max-w-2xl mx-auto">
      Visit Lion of Judah Beauty Shop at Dubois Road, Nairobi. We look
      forward to serving you with authentic beauty and wellness products.
    </p>
  </div>

  <div className="overflow-hidden rounded-xl border border-navy-100 shadow-lg">
    <iframe
      title="Lion of Judah Beauty Shop Location"
      src="https://www.google.com/maps?q=Dubois%20Road%20Nairobi&output=embed"
      width="100%"
      height="500"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />
  </div>
</section>
    </div>
  );
}
