import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar/navbar'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: '@mbchavezz',
  description: 'Porfolio',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-[#BFBFBF]">
          <Navbar></Navbar>
          <div className="min-h-screen bg-[#0a0a0a]">{children}</div>
        </div>
      </body>
    </html>
  )
}
