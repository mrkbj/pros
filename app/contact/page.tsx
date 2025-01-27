"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const contactData = {
      name,
      email,
      phone,
      message,
    }

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions about our services or want to schedule a cleanup? We&apos;re here to help! Fill out the form
            below, and we&apos;ll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">The Pooper Scooper Pros</h3>
            <p className="text-gray-600 mt-4">Phone: (336) 213-8584</p>
            <p className="text-gray-600">Email: thepooperscooperpros@yahoo.com</p>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: Closed</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

