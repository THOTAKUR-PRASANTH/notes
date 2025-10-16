"use client"

import React, { useEffect, useRef, useState } from "react"

// The Route type from next/link is not available, so we'll use string for hrefs
const days: { href: string; label: string }[] = [
  { href: "/day1", label: "Day 1" },
  { href: "/day2", label: "Day 2" },
  { href: "/day3", label: "Day 3" },
  { href: "/day4", label: "Day 4" },
  { href: "/day5", label: "Day 5" },
  { href: "/day6", label: "Day 6" },
  { href: "/day7", label: "Day 7" },
  { href: "/day8", label: "Day 8" },
  { href: "/day9", label: "Day 9" },
   { href: "/day10", label: "Day 10" },
    { href: "/day11", label: "Day 11" },
    { href: "/day12", label: "Day 12" },
    { href: "/day13", label: "Day 13" },
    { href: "/day14", label: "Day 14" },
    { href: "/day15", label: "Day 15" },
    { href: "/day16", label: "Day 16" },
     { href: "/day17", label: "Day 17" },
]

// Changed to a default export to resolve the Server Component error
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-black/10">
      <div className="container-responsive flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-4 ">
        {/* --- ANIMATED LOGO / BRAND --- */}
        <div className="flex items-center gap-4">
          {/* Replaced Link with a standard <a> tag */}
          <a
            className="font-bold text-lg sm:text-xl"
            href="/"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-text-gradient">
              Notes Sharing
            </span>
          </a>
        </div>

        {/* --- LINKS with ENHANCED HOVER EFFECTS --- */}
        <div className="flex items-center gap-3">
          {/* Replaced Link with a standard <a> tag */}
          <a
            href="/"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-200 hover:text-white hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10.55 2.35a.75.75 0 00-1.1 0l-7 7.5a.75.75 0 101.1 1.02L3 10.45V16a2 2 0 002 2h2.5a.5.5 0 00.5-.5V13h4v4.5a.5.5 0 00.5.5H15a2 2 0 002-2v-5.55l.45.42a.75.75 0 001.1-1.02l-7-7.5z" />
            </svg>
            <span className="hidden sm:inline">Home</span>
          </a>

          {/* Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-200 hover:text-white hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
            >
              <span>Days</span>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                <div className="p-1">
                  {days.map((item) => (
                    // Replaced Link with a standard <a> tag
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200"
                    >
                      <span>{item.label}</span>
                      <span className="text-blue-400">→</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

