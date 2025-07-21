import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center py-8 px-4">
      <Helmet>
        <title>Terms of Use | Vclock</title>
        <meta name="description" content="Read the Terms of Use for Vclock. Understand your rights and responsibilities when using our world clock and time tools." />
        <link rel="canonical" href="https://vclock.app/terms" />
        <meta name="keywords" content="terms of use, vclock terms, user agreement, legal, conditions, vclock policy, world clock terms, time app terms" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4 text-blue-900 dark:text-blue-100">Terms of Use</h1>
      <div className="max-w-2xl text-gray-700 dark:text-gray-300 space-y-4">
        <p>Welcome to Vclock! By using our website, you agree to the following terms and conditions. Please read them carefully.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p>By accessing or using Vclock, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of the Service</h2>
        <p>You may use Vclock for personal, non-commercial purposes only. You may not use the site for any unlawful or prohibited purpose.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
        <p>All content, trademarks, and data on this site are the property of Vclock or its licensors and are protected by copyright laws.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer</h2>
        <p>Vclock is provided "as is" without warranties of any kind. We do not guarantee the accuracy or availability of the service.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p>We reserve the right to update these Terms of Use at any time. Continued use of the site constitutes acceptance of the new terms.</p>
      </div>
    </div>
  );
};

export default TermsOfUse; 