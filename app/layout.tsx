import React from 'react'
import Link from 'next/link'
import { Logo } from './components/Logo'
import './globals.css'

export const metadata = {
  title: 'The Pooper Scooper Pros',
  description: 'Professional pet waste removal services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-gray-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Logo className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10" />
              <h1 className="text-xl sm:text-2xl font-bold">The Pooper Scooper Pros</h1>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
                <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 The Pooper Scooper Pros. All rights reserved.</p>
            <p className="mt-2">Contact: thepooperscooperpros@yahoo.com | (336) 213-8584</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

