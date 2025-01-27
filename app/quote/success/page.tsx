export default function QuoteSuccessPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Quote Submitted Successfully!</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Thank you for your interest in our services. We have received your quote request and will contact you
              shortly to discuss the details.
            </p>
            <p className="text-gray-600 mb-4">
              A recap of your quote has been sent to your email address. Please check your inbox (and spam folder) for
              this information.
            </p>
            <p className="text-gray-600">
              If you have any immediate questions, please don't hesitate to call us at (336) 213-8584.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  