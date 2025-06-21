import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { GeminiChat } from '@/components/gemini-chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdullah Talal - Full Stack Developer',
  description: 'Portfolio showcasing cutting-edge web development projects with Next.js, API integrations, and modern UX/UI design.',
  keywords: ['Full Stack Developer', 'Next.js', 'API Integration', 'WhatsApp', 'Social Media Automation'],
  authors: [{ name: 'Abdullah Talal' }],
  openGraph: {
    title: 'Abdullah Talal - Full Stack Developer',
    description: 'Portfolio showcasing cutting-edge web development projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange        >
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-900">
            {children}
          </main>
          <GeminiChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
