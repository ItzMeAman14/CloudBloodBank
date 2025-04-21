
import Navbar from "@/components/Navbar";
import { Contact } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <Navbar />
      <div className="container mx-auto max-w-lg flex flex-col items-center justify-center py-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center bg-[#ea384c]/10 rounded-full p-3">
            <Contact className="text-[#ea384c]" size={32} />
          </span>
          <h1 className="font-extrabold text-3xl text-[#ea384c]">
            Contact Us
          </h1>
        </div>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Have a question, suggestion, or need to get in touch? Fill out the form below or email us at <a className="underline text-[#ea384c]" href="mailto:support@donorbridge.com">support@donorbridge.com</a>, and we'll get back to you promptly.
        </p>
        <form onSubmit={handleSubmit} className="w-full bg-white/70 rounded-lg shadow p-6 flex flex-col gap-4">
          <input
            required
            name="name"
            placeholder="Full Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#ea384c]"
            value={form.name}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#ea384c]"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            required
            name="message"
            placeholder="Your message"
            className="border border-gray-300 rounded px-4 py-2 resize-none h-28 focus:outline-none focus:border-[#ea384c]"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 rounded-lg bg-[#ea384c] text-white font-semibold text-lg hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-green-600 font-medium">Thank you for contacting us. We'll get back to you soon!</div>
        )}
      </div>
    </div>
  );
}