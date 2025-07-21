import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contacts: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-800 min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <Helmet>
        <title>Contact Us | Vclock</title>
        <meta name="description" content="Contact Vclock for support, feedback, or partnership inquiries. Reach us via the form or at info@vclock.app." />
        <link rel="canonical" href="https://vclock.app/contacts" />
        <meta name="keywords" content="contact vclock, vclock support, feedback, partnership, contact form, help, vclock app, time app support, clock app contact" />
      </Helmet>
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-blue-100 dark:border-gray-700 p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700 px-8 py-6 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide mb-1">Contact Us</h1>
          <p className="text-blue-100 text-sm">We'd love to hear from you!</p>
        </div>
        <div className="px-8 py-8">
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
            Have a question, suggestion, or feedback? Fill out the form below or email us at <a href="mailto:info@vclock.app" className="text-blue-600 underline font-semibold">info@vclock.app</a>.
          </p>
          {submitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg px-4 py-3 text-center font-medium mb-4">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className="relative">
                <input type="text" id="name" name="name" required className="peer h-12 w-full px-4 pt-4 pb-1 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all placeholder-transparent" placeholder="Your Name" />
                <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-300">Your Name</label>
              </div>
              <div className="relative">
                <input type="email" id="email" name="email" required className="peer h-12 w-full px-4 pt-4 pb-1 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all placeholder-transparent" placeholder="Your Email" />
                <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-300">Your Email</label>
              </div>
              <div className="relative">
                <textarea id="message" name="message" required className="peer h-32 w-full px-4 pt-6 pb-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all resize-none placeholder-transparent" placeholder="Your Message" />
                <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-300">Your Message</label>
              </div>
              <button type="submit" className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 text-white rounded-lg font-bold text-lg shadow hover:from-blue-700 hover:to-blue-500 dark:hover:from-blue-900 dark:hover:to-blue-700 transition-all">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts; 