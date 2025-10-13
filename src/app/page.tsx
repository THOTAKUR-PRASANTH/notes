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

  const cards = [
    {
      day: "Day 1",
      desc: "Introduction and Python basics",
      link: "/day1",
      gradient: "from-blue-500 to-indigo-600",
      border: "border-blue-400"
    },
    {
      day: "Day 2", 
      desc: "Control flow and data structures",
      link: "/day2",
      gradient: "from-purple-500 to-violet-600",
      border: "border-purple-400"
    },
    {
      day: "Day 3",
      desc: "Functions and Modules", 
      link: "/day3",
      gradient: "from-pink-500 to-rose-600",
      border: "border-pink-400"
    },
    {
      day: "Day 4",
      desc: "Data Structures & Lists",
      link: "/day4", 
      gradient: "from-emerald-500 to-teal-600",
      border: "border-emerald-400"
    },
    {
      day: "Day 5",
      desc: "Data structures (tuple, set, dict)",
      link: "/day5",
      gradient: "from-amber-500 to-orange-600",
      border: "border-amber-400"
    },
    {
      day: "Day 6",
      desc: "File Handling & Exception Handling",
      link: "/day6",
      gradient: "from-cyan-500 to-sky-600",
      border: "border-cyan-400"
    },
    {
      day: "Day 7", 
      desc: "Object-Oriented Programming (classes,objects,inheritance)",
      link: "/day7",
      gradient: "from-red-500 to-pink-600",
      border: "border-red-400"
    },
    {
      day: "Day 8",
      desc: "Object-Oriented Programming (inheritance,polymorphism)",
      link: "/day8",
      gradient: "from-lime-500 to-green-600",
      border: "border-lime-400"
    },

    {
      day: "Day 9",
      desc: "libraries(NumPy)", 
      link: "/day9",
      gradient: "from-pink-500 to-rose-600",
      border: "border-pink-400"
    },

     {
      day: "Day 10",
      desc: "libraries(Pandas)",
      link: "/day10",
      gradient: "from-blue-500 to-indigo-600",
      border: "border-blue-400"
    },
      {
      day: "Day 11",
      desc: "Advanced Data Structures (Stacks, Queues)",
      link: "/day11",
      gradient: "from-orange-500 to-pink-500",
      border: "border-orange-400"
    },
    
      {
      day: "Day 12",
      desc: "Practical exercises",
      link: "/day12",
      gradient: "from-fuchsia-500 to-yellow-400",
      border: "border-fuchsia-400"
    },
    {
      day: "Day 13",
      desc: "Advanced Data Structures (Linked Lists)",
      link: "/day13",
      gradient: "from-sky-400 via-indigo-500 to-purple-600",
      border: "border-sky-400"
    },
    
    {
      day: "Day 14",
      desc: "Error Handling And Debugging",
      link: "/day14",
      gradient: "from-yellow-400 via-pink-500 to-red-500",
      border: "border-yellow-400"
    },
    
  ];

  return (
    <div className="space-y-12 py-16">
      
      <section className="text-center fade-in pb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight h-20 flex items-center">
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

  
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {cards.map((card) => (
          <a
            key={card.day}
            href={card.link}
            className={`bg-gradient-to-br ${card.gradient} ${card.border} border-2 rounded-xl p-6 text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl w-full h-44 flex flex-col justify-between`}
          >
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-3">{card.day}</h2>
              <p className="text-white text-opacity-90 text-sm leading-relaxed">{card.desc}</p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">Open Course</span>
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