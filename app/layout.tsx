import './globals.css'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mattia Pietroboni',
  description: '', // FIXME add description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col px-4 pt-8 sm:pt-20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[600px] mx-auto flex flex-1 w-full">
            <div>{children}</div>
          </main>
          <footer className="bg-background">
            <div className="max-w-[600px] mx-auto flex border-t justify-end py-2 px-4">
              <ThemeToggle />
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
