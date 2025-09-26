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

      {/* --- CARDS GRID (Modern, Colorful, Dark-support) --- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        { [
          { day: "Day 1", desc: "Introduction and Python basics", link: "/day1", color: "border-blue-500 text-blue-400" },
          { day: "Day 2", desc: "Control flow and data structures", link: "/day2", color: "border-purple-500 text-purple-400" },
          { day: "Day 3", desc: "Functions and Modules", link: "/day3", color: "border-pink-500 text-pink-400" },
          { day: "Day 4", desc: "Data Structures & Lists", link: "/day4", color: "border-emerald-500 text-emerald-400" },
          { day: "Day 5", desc: "Data structures (tuple, set, dict)", link: "/day5", color: "border-amber-500 text-amber-400" },
          { day: "Day 6", desc: "File Handling & Exception Handling", link: "/day6", color: "border-cyan-500 text-cyan-400" },
          { day: "Day 7", desc: "Object-Oriented Programming (OOP)", link: "/day7", color: "border-orange-500 text-orange-400" },
        ].map((card) => (
          <a
            key={card.day}
            href={card.link}
            className={`card-uiverse bg-slate-900 border-l-8 ${card.color} rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform hover:scale-105`}
          >
            <div>
              <h2 className={`text-xl font-bold mb-2 ${card.color.split(' ')[1]}`}>{card.day}</h2>
              <p className="text-slate-300 mb-4">{card.desc}</p>
            </div>
            <div className={`flex items-center font-semibold ${card.color.split(' ')[1]}`}>
              <span className="mr-2">Open</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        )) }
      </section>
    </div>
  );
}
