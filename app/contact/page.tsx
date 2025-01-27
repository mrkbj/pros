"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-12 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Have questions about our services or want to schedule a cleanup? We're here to help! Feel free to reach out
            to us using the contact information below.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">The Pooper Scooper Pros</h3>
              <p className="text-gray-600 text-lg">Phone: (336) 213-8584</p>
              <p className="text-gray-600 text-lg">Email: thepooperscooperpros@yahoo.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Business Hours</h3>
              <p className="text-gray-600 text-lg">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-600 text-lg">Saturday: Closed</p>
              <p className="text-gray-600 text-lg">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

