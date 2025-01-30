export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">About The Pooper Scooper Pros</h1>
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, The Pooper Scooper Pros started with a simple mission: to help pet owners maintain clean
              and healthy yards. What began as a small, local operation has grown into a trusted service provider across
              the region.
            </p>
            <p className="text-gray-600">
              Our team of dedicated professionals is committed to delivering top-notch service with a smile. We understand
              the importance of a clean environment for both pets and their owners, and we take pride in our work.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Reliability: We show up when we say we will, every time.</li>
              <li>Thoroughness: We make sure your yard is clean.</li>
              <li>Professionalism: We use responsible disposal methods.</li>
              <li>Customer satisfaction: Your happiness is our top priority.</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
  
  