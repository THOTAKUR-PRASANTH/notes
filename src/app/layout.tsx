import type { Metadata } from 'next'
import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Notes Sharing',
  description: 'Python-friendly class notes for students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col antialiased text-slate-100 bg-dark-premium">
        <Navbar />
        <main className="container-responsive pt-16 pb-8 fade-in flex-grow">
          {children}
        </main>
        
        {/* --- REWORKED & THINNER FOOTER --- */}
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
          {/* Reduced py-8 to py-5 for less height */}
          <div className="container-responsive py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400 gap-4">
              <span>© 2025 Notes Sharing.</span>
              <div className="flex items-center gap-2">
                <span>Developed by</span>
                {/* Added text-glow-purple class for the highlight effect */}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-glow-purple">
                  Prashanth_chowdari
                </span>
              </div>
            </div>

            {/* Reduced my-8 to my-4 for the divider */}
            <div className="w-full max-w-xs mx-auto h-px my-4 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Added a tiny quote */}
            <p className="text-center text-xs text-slate-500 italic">
              Sharing knowledge, building futures.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
