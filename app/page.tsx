import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
        <Image
          src="/unknown.jpg"
          alt="The Pooper Scooper Pros logo featuring a golden retriever with a shovel"
          width={800}
          height={600}
          className="w-full h-[400px] object-contain bg-gray-50 border-2 border-gray-300"
          priority
        />
      </section>
      <div className="text-center mt-8">
        <Link
          href="/quote"
          className="inline-block bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 rounded-md text-lg font-semibold transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Cleanup",
              description:
                "Regular waste removal for your home's yard, keeping it clean and safe for your family and pets.",
            },
            {
              title: "Commercial Properties",
              description: "Maintain a clean environment for your business, apartment complex, or public spaces.",
            },
            {
              title: "One-Time Cleanup",
              description: "Perfect for move-outs, special events, or when you need a fresh start for your yard.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                {
                  title: "Professional and reliable service",
                  description: "Our trained staff ensures thorough and consistent cleanup.",
                },
                {
                  title: "Responsible waste disposal",
                  description: "We use professional methods to dispose of pet waste.",
                },
                {
                  title: "Flexible scheduling options",
                  description: "Choose from weekly, bi-weekly, or custom schedules to fit your needs.",
                },
                {
                  title: "Satisfaction guaranteed",
                  description: "We're not happy unless you're happy with our service.",
                },
                {
                  title: "Safety first",
                  description: "We disinfect equipment after every stop for the safety of all dogs and owners.",
                },
              ].map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>
                    <strong className="text-blue-600">{reason.title}:</strong> {reason.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {[
            {
              question: "Do you clean the whole yard?",
              answer:
                "We clean any part of the yard that has waste, including back, front, sides, flower beds, dog runs etc.",
            },
            {
              question: "Do you provide services year-round?",
              answer: "Yes, we do. As long as weather permits, we will continue to come out even if it snows.",
            },
            {
              question: "How much does your service cost?",
              answer:
                "The price varies based on yard size, number of dogs, and service frequency. Use our quote calculator to get an estimate!",
            },
            {
              question: "Do I have to sign a contract for services?",
              answer: "No, you do not. You can start, stop, or pause and cancel at any time by contacting us.",
            },
            {
              question: "Can you work with my dog in the yard?",
              answer:
                "Yes, we can. However, if your dog is aggressive or has shown signs of aggression, we will ask that the dog be secured during our visit.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

