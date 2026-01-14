export default function Hero() {
  return (
    <section className="relative bg-blue-100 py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Compassionate Care <br />
            <span className="text-blue-600">In the Comfort of Home</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            We provide professional, reliable, and heart-centered homecare services 
            tailored to your family's unique needs. Because there's no place like home.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View Our Services
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Placeholder for Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-80 bg-blue-200 rounded-2xl flex items-center justify-center text-blue-800 italic">
            [Image of caregiver or happy senior will go here]
          </div>
        </div>
      </div>
    </section>
  );
}