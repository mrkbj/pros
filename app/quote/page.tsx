import { QuoteCalculator } from "./QuoteCalculator"


export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-yellow-600 mb-8 text-center">Get a Free Quote</h1>
      <div className="max-w-2xl mx-auto">
        <QuoteCalculator />
        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800 mb-4">What's Included:</h2>
          <ul className="space-y-2 text-green-700">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Thorough yard inspection and cleanup
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Professional waste disposal
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Service report after each visit
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Satisfaction guarantee
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

