import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Time Alchemist',
  description: 'The not so perfect app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex bg-gradient-to-b from-[#000] to-[#002334]">{children}</body>
    </html>
  )
}
