'use client';

import { useState, useEffect } from 'react';

// --- LAUGHING ICON COMPONENT ---
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
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phrases, currentPhraseIndex]);

  const cards = [
    { day: "Day 1", desc: "Introduction and Python basics", link: "/day1", gradient: "from-blue-900 via-blue-700 to-blue-500", accent: "text-blue-300" },
    { day: "Day 2", desc: "Control flow and data structures", link: "/day2", gradient: "from-purple-900 via-purple-700 to-purple-500", accent: "text-purple-300" },
    { day: "Day 3", desc: "Functions and Modules", link: "/day3", gradient: "from-pink-900 via-pink-700 to-pink-500", accent: "text-pink-300" },
    { day: "Day 4", desc: "Data Structures & Lists", link: "/day4", gradient: "from-emerald-900 via-emerald-700 to-emerald-500", accent: "text-emerald-300" },
    { day: "Day 5", desc: "Tuple, Set, Dict", link: "/day5", gradient: "from-amber-900 via-amber-700 to-amber-500", accent: "text-amber-300" },
    { day: "Day 6", desc: "File & Exception Handling", link: "/day6", gradient: "from-cyan-900 via-cyan-700 to-cyan-500", accent: "text-cyan-300" },
    { day: "Day 7", desc: "OOP Concepts", link: "/day7", gradient: "from-orange-900 via-orange-700 to-orange-500", accent: "text-orange-300" },
  ];

  return (
    <div className="space-y-12 py-16 bg-black min-h-screen text-white">
      {/* HERO */}
      <section className="text-center fade-in pb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight h-20 flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {displayedText}
              <span className="animate-blink">|</span>
            </span>
            <LaughingIcon className="ml-2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-pink-400" />
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            The cheeriest place on the web to share and discover notes.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {cards.map((card) => (
          <a
            key={card.day}
            href={card.link}
            className={`card-animated rounded-xl p-6 flex flex-col justify-between shadow-lg transition-transform hover:scale-105 bg-gradient-to-br ${card.gradient} border-2 border-transparent hover:border-current ${card.accent}`}
          >
            <div>
              <h2 className={`text-xl font-bold mb-2 ${card.accent}`}>{card.day}</h2>
              <p className="text-slate-200 mb-4">{card.desc}</p>
            </div>
            <div className={`flex items-center font-semibold ${card.accent}`}>
              <span className="mr-2">Open</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
