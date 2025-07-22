import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "a646d72e-e700-498b-80f7-bcf74c7b1977");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setResult("Message sent successfully");
      e.target.reset();
    } else {
      setResult("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-black dark:text-white font-orbitron">
        Contact Me
      </h2>
      <p className="mb-8 text-black dark:text-white font-orbitron">
        Have a project in mind or just want to connect? Feel free to reach out!
      </p>

      <form onSubmit={onSubmit} className="space-y-6 text-left">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium font-orbitron dark:text-white">
            Name
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500 dark:text-purple-400">
              <i className="bx bxs-user text-lg"></i>
            </span>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-black/30 border border-pink-500 dark:border-purple-500 rounded text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500 font-mono"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium font-orbitron dark:text-white">
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500 dark:text-purple-400">
              <i className="bx bxs-envelope text-lg"></i>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-black/30 border border-pink-500 dark:border-purple-500 rounded text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500 font-mono"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium font-orbitron dark:text-white">
            Message
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-pink-500 dark:text-purple-400">
              <i className="bx bxs-message-dots text-lg"></i>
            </span>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-black/30 border border-pink-500 dark:border-purple-500 rounded text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500 font-mono"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-2 px-6 rounded transition font-orbitron"
          >
            Send Message
          </button>
        </div>

        {/* Result Message */}
        {result && (
          <p className="mt-4 text-sm text-center text-pink-500 dark:text-purple-400 font-orbitron">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;