import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-800 text-blue-100 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo className="text-blue-500" />
            <h1 className="text-2xl font-bold">The Pooper Scooper Pros</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 The Pooper Scooper Pros. All rights reserved.</p>
          <p className="mt-2">Contact: info@pooperscooperpros.com | (555) 123-4567</p>
          <p className="mt-4">123 Clean Street, Pawsome City, PC 12345</p>
        </div>
      </footer>
    </div>
  )
}

