import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

export default function ContactUs() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  }

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>

        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}