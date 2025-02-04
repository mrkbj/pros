"use client"

import { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { init, send } from "@emailjs/browser"

type YardSize = "small" | "medium" | "large"
type Frequency = "weekly" | "biweekly" | "monthly"

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
  const [frequency, setFrequency] = useState<Frequency>("weekly")
  const [yardSize, setYardSize] = useState<YardSize>("small")
  const [dogs, setDogs] = useState(1)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deodorize, setDeodorize] = useState(false)

  useEffect(() => {
    init("t-Z69g1Q2y-qidwm3")
  }, [])

  const calculatePrice = () => {
    const tier = pricingTiers[yardSize][frequency]
    let monthlyPrice =
      dogs === 1 ? tier.oneDog : dogs === 2 ? tier.twoDogs : dogs === 3 ? tier.threeDogs : tier.fourOrMore
    if (deodorize) {
      monthlyPrice += 40 // Add $40 per month for deodorizing service
    }
    const weeklyPrice = monthlyPrice / 4 // Calculate weekly price from monthly price
    return { weekly: weeklyPrice, monthly: monthlyPrice }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const prices = calculatePrice()

    const templateParams = {
      name: name,
      yard_size: yardSize,
      frequency: frequency,
      dogs: dogs.toString(),
      email: email,
      phone: phoneNumber,
      price_monthly: prices.monthly.toFixed(2),
      price_weekly: prices.weekly.toFixed(2),
      deodorize: deodorize ? "Yes" : "No",
    }

    try {
      // Send email to the user
      await send("service_nfkb0es", "template_u5rkgn8", templateParams, "t-Z69g1Q2y-qidwm3")

      // Send email to the separate email address
      await send(
        "service_nfkb0es",
        "template_yg7hf6v", // Replace with your separate template ID
        templateParams,
        "t-Z69g1Q2y-qidwm3",
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
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="yard_size" className="block text-sm font-medium text-gray-700">
            Yard Size
          </label>
          <select
            id="yard_size"
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

        <div>
          <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
            Service Frequency
          </label>
          <select
            id="frequency"
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

        <div>
          <label htmlFor="dogs" className="block text-sm font-medium text-gray-700">
            Number of Dogs: {dogs}
          </label>
          <input
            type="range"
            id="dogs"
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

        <div className="flex items-center">
          <input
            type="checkbox"
            id="deodorize"
            name="deodorize"
            checked={deodorize}
            onChange={(e) => setDeodorize(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="deodorize" className="ml-2 block text-sm text-gray-900">
            Add deodorizing service (extra fee applies)
          </label>
        </div>

        <div className="bg-gray-50 px-4 py-5 rounded-lg space-y-2">
          <div>
            <span className="text-sm font-medium text-gray-500">Estimated Monthly Price:</span>
            <span className="text-2xl font-bold text-blue-600"> ${calculatePrice().monthly.toFixed(2)}/Month</span>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Estimated Weekly Price:</span>
            <span className="text-lg font-semibold text-blue-600"> ${calculatePrice().weekly.toFixed(2)}/Week</span>
          </div>
        </div>

        <input type="hidden" name="price_monthly" value={calculatePrice().monthly.toFixed(2)} />
        <input type="hidden" name="price_weekly" value={calculatePrice().weekly.toFixed(2)} />

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

