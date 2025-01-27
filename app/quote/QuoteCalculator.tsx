"use client"

import { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { init, send } from "@emailjs/browser"

type YardSize = "small" | "medium" | "large"
type Frequency = "weekly" | "biweekly" | "monthly"

// Pricing tiers for different yard sizes and service frequencies
const pricingTiers: Record<
  YardSize,
  Record<Frequency, { oneDog: number; twoDogs: number; threeDogs: number; fourOrMore: number }>
> = {
  small: {
    weekly: { oneDog: 80, twoDogs: 90, threeDogs: 100, fourOrMore: 110 },
    biweekly: { oneDog: 65, twoDogs: 75, threeDogs: 85, fourOrMore: 95 },
    monthly: { oneDog: 55, twoDogs: 60, threeDogs: 65, fourOrMore: 70 },
  },
  medium: {
    weekly: { oneDog: 100, twoDogs: 110, threeDogs: 120, fourOrMore: 130 },
    biweekly: { oneDog: 75, twoDogs: 82.5, threeDogs: 90, fourOrMore: 97.5 },
    monthly: { oneDog: 56.25, twoDogs: 61.88, threeDogs: 67.5, fourOrMore: 73.13 },
  },
  large: {
    weekly: { oneDog: 120, twoDogs: 130, threeDogs: 140, fourOrMore: 150 },
    biweekly: { oneDog: 90, twoDogs: 100, threeDogs: 110, fourOrMore: 120 },
    monthly: { oneDog: 62, twoDogs: 72, threeDogs: 82, fourOrMore: 92 },
  },
}

export function QuoteCalculator() {
  // State variables for form inputs and submission status
  const [frequency, setFrequency] = useState<Frequency>("weekly")
  const [yardSize, setYardSize] = useState<YardSize>("small")
  const [dogs, setDogs] = useState(1)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    init("R5CBdCu4Opuuiz-Ur")
  }, [])

  // Calculate price based on inputs
  const calculatePrice = () => {
    const tier = pricingTiers[yardSize][frequency]
    if (dogs === 1) return tier.oneDog
    if (dogs === 2) return tier.twoDogs
    if (dogs === 3) return tier.threeDogs
    return tier.fourOrMore // 4 or more dogs
  }

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget

    try {
      // Send email using EmailJS
      await send(
        "service_8va52za",
        "template_69g2fcg",
        {
          yard_size: yardSize,
          frequency: frequency,
          dogs: dogs,
          email: email,
          price: calculatePrice(),
        },
        "R5CBdCu4Opuuiz-Ur",
      )
      toast.success("Quote sent successfully!")
      alert("Your quote has been submitted successfully!")
    } catch (error) {
      console.error("EmailJS error:", error)
      toast.error("Failed to send the quote. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Quote</h3>

      <div className="space-y-6">
        {/* Yard Size Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Yard Size</label>
          <select
            name="yard_size"
            value={yardSize}
            onChange={(e) => setYardSize(e.target.value as YardSize)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Service Frequency Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Service Frequency</label>
          <select
            name="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as Frequency)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Number of Dogs Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Dogs: {dogs}</label>
          <input
            type="range"
            name="dogs"
            min="1"
            max="4"
            value={dogs}
            onChange={(e) => setDogs(Number(e.target.value))}
            className="mt-1 block w-full"
          />
          <div className="flex justify-between text-xs text-gray-600">
            <span>1 dog</span>
            <span>4+ dogs</span>
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        {/* Estimated Price Display */}
        <div className="bg-gray-50 px-4 py-5 rounded-lg">
          <span className="text-sm font-medium text-gray-500">Estimated Price:</span>
          <span className="text-2xl font-bold text-blue-600"> ${calculatePrice()}</span>
        </div>

        {/* Hidden input for price (to be sent with the form) */}
        <input type="hidden" name="price" value={calculatePrice()} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md disabled:bg-blue-300"
        >
          {isSubmitting ? "Submitting..." : "Get Quote"}
        </button>
      </div>
    </form>
  )
}

