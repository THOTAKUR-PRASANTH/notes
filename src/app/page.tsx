'use client';

import { useState, useEffect } from 'react';

// --- LAUGHING ICON COMPONENT ---
// By defining the icon here, we remove the need for a separate file and fix the import error.
function LaughingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
  const phrases = ["Happy Notes, Happy Learning!"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        // Deleting effect
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Typing effect
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phrases, currentPhraseIndex]);

  return (
    <div className="space-y-12 py-16">
      {/* --- HERO SECTION --- */}
      <section className="text-center fade-in pb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight h-20 flex items-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {displayedText}
              <span className="animate-blink">|</span>
            </span>
            {/* Using the icon component directly */}
            <LaughingIcon className="ml-2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-pink-400" />
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            The cheeriest place on the web to share and discover notes.
          </p>
        </div>
      </section>

      {/* --- CARDS GRID (Unchanged) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          href="/day1"
          className="gradient-card card-blue p-6 group enhanced-animate delay-100"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-300">Day 1</h2>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
          <p className="text-slate-300 mb-4">Introduction and Python basics</p>
          <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
            <span className="mr-2">Open</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
        <a
          href="/day2"
          className="gradient-card card-purple p-6 group enhanced-animate delay-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-purple-300">Day 2</h2>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
          <p className="text-slate-300 mb-4">
            Control flow and data structures
          </p>
          <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
            <span className="mr-2">Open</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
        <a
          href="/day3"
          className="gradient-card card-pink p-6 group enhanced-animate delay-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-pink-300">Day 3</h2>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
          <p className="text-slate-300 mb-4">Functions and Modules</p>
          <div className="flex items-center text-pink-400 group-hover:text-pink-300 transition-colors">
            <span className="mr-2">Open</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
        <a
          href="/day4"
          className="gradient-card card-emerald p-6 group enhanced-animate delay-400"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-emerald-300">Day 4</h2>
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          </div>
          <p className="text-slate-300 mb-4">Data Structures & Lists</p>
          <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <span className="mr-2">Open</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
        <a
          href="/day5"
          className="gradient-card card-amber p-6 group enhanced-animate delay-500"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-amber-300">Day 5</h2>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
          <p className="text-slate-300 mb-4">
            Data structures (tuple, set, dict)
          </p>
          <div className="flex items-center text-amber-400 group-hover:text-amber-300 transition-colors">
            <span className="mr-2">Open</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
      </section>
    </div>
  );
}

