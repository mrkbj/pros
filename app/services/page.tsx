import Image from 'next/image'

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image 
            src="/res.jpeg" 
            alt="Beautiful residential home with white picket fence" 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Residential Service</h2>
            <p className="text-gray-600 mb-4">We offer regular waste removal for your home&apos;s yard, keeping it clean and safe for your family and pets. Choose from weekly, bi-weekly, or custom schedules to fit your needs.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Thorough yard cleaning</li>
              <li>Flexible scheduling options</li>
              <li>Pet-safe practices</li>
              <li>Professional waste disposal</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image 
            src="/comm.jpeg" 
            alt="Modern commercial building with geometric architecture" 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Commercial Service</h2>
            <p className="text-gray-600 mb-4">We help maintain a clean environment for your business, apartment complex, or public spaces. Our commercial services are designed to keep your property looking its best.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Large area coverage</li>
              <li>Regular maintenance plans</li>
              <li>Discreet and efficient service</li>
              <li>Customized solutions for your property</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

