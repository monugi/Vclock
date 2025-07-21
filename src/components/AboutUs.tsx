
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center py-0 px-0">
      <Helmet>
        <title>About VClock.App | Free Online Alarm Clock, Timer & World Clock</title>
        <meta name="description" content="Learn about VClock.App, the free online alarm clock, timer, stopwatch, and world clock. Discover our philosophy, features, and the story behind our simple, ad-free time tools." />
        <link rel="canonical" href="https://vclock.app/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 py-12 px-4 text-center border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-200 mb-4 font-nunito tracking-tight">About VClock</h1>
      </section>
      {/* Content Section */}
      <section className="w-full px-4 sm:px-8 py-10 mb-12">
        <article className="prose prose-blue dark:prose-invert max-w-none space-y-4">
          <h2 className="font-bold">Welcome to VClock.App</h2>
          <p>Hey there! <span role="img" aria-label="wave">👋</span> Welcome to <strong>VClock.App</strong> — your clean, no-fuss online clock toolkit.</p>
          <p>At VClock, we believe in <strong>keeping things simple and useful</strong>. Whether you’re staying focused during a study session, managing your workout, or just keeping track of time across time zones, we’ve got you covered with easy-to-use tools that work straight from your browser.</p>

          <h2 className="font-bold">What You’ll Find at VClock.App</h2>
          <p>VClock.App offers a suite of tools designed to help you manage your time effortlessly:</p>
          <ul>
            <li><span role="img" aria-label="alarm clock">🕒</span> <strong>Alarm Clock</strong> — Set custom alarms to wake up, stay on schedule, or remind yourself of anything important.</li>
            <li><span role="img" aria-label="stopwatch">⏱️</span> <strong>Stopwatch</strong> — Track time with precision — perfect for workouts, tasks, or even cooking.</li>
            <li><span role="img" aria-label="timer">⏲️</span> <strong>Timer</strong> — Countdown with ease. Great for productivity sprints, breaks, or daily routines.</li>
            <li><span role="img" aria-label="world">🌍</span> <strong>World Clock</strong> — Check the time anywhere in the world in just a click — ideal for remote teams or global connections.</li>
          </ul>
          <p>All these tools are completely <strong>free</strong>, fast, and super easy to use. No sign-ups, no app downloads, and definitely no clutter.</p>

          <h2 className="font-bold">Meet the Creator</h2>
          <p>Hi, I’m <strong><a href="https://www.linkedin.com/in/monukumar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline hover:text-blue-800">Monu Tiwari</a></strong>, the founder of VClock.App.</p>
          <p>I built VClock because I was tired of complicated apps that just got in the way. All I wanted was a simple online clock — no ads, no popups, no bloat. So I made one. Then I added the tools I needed most: an alarm, stopwatch, timer, and world clock — all in one clean place.</p>
          <p>Turns out, I wasn’t the only one looking for something like this. Since launching, VClock has been used by students, teachers, professionals, remote workers, and people around the world who just need a reliable way to manage their time.</p>

          <h2 className="font-bold">Our Philosophy</h2>
          <p>We believe in:</p>
          <ul>
            <li><span role="img" aria-label="brain">🧠</span> <strong>Simple over flashy</strong></li>
            <li><span role="img" aria-label="tools">🛠️</span> <strong>Useful over complicated</strong></li>
            <li><span role="img" aria-label="clock">🕰️</span> <strong>Time-respecting over time-wasting</strong></li>
          </ul>
          <p>We don’t track your data. We don’t push ads in your face. And we’ll never charge you for basic tools that should be free.</p>

          <h2 className="font-bold">Thanks for Stopping By</h2>
          <p>Whether you're here to time a workout, stay focused while studying, or just keep an eye on the clock — we're glad you're here.</p>
          <p>Thanks for using <strong>VClock.App</strong>. Your time matters. <span role="img" aria-label="hourglass">⏳</span></p>
        </article>
      </section>
    </div>
  );
};

export default AboutUs; 