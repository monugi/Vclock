import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center py-8 px-4">
      <Helmet>
        <title>Privacy Policy | Vclock</title>
        <meta name="description" content="Learn how Vclock collects, uses, and protects your information. Read our privacy policy for details on data and cookies." />
        <link rel="canonical" href="https://vclock.app/privacy" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4 text-blue-900 dark:text-blue-100">Privacy Policy</h1>
      <div className="max-w-2xl text-gray-700 dark:text-gray-300 space-y-4">
        <p>Your privacy is important to us. This policy explains how Vclock collects, uses, and protects your information.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p>We may collect non-personal information such as browser type, device, and usage statistics to improve our service. We do not collect personal information unless you provide it via the contact form.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p>Information collected is used solely to improve the user experience and communicate with you if you contact us.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
        <p>Vclock may use cookies for analytics and to enhance your experience. You can disable cookies in your browser settings.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p>We may use third-party analytics tools that collect non-personal data. We do not share your information with third parties except as required by law.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Please review it periodically for changes.</p>
      </div>
    </div>
  );
};

export default Privacy; 