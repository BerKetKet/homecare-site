import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-blue-50 py-12 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Compassionate Care <br />
            <span className="text-blue-700">In the Comfort of Home</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Setna Homecare provides professional, reliable, and heart-centered healthcare consultancy
            tailored to your family's unique needs in Addis Ababa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full sm:w-auto">
              View Our Services
            </button>
            <a href="tel:+251903137868" className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition w-full sm:w-auto text-center">
              Call Now
            </a>
          </div>
        </div>

        {/* Real Image Section */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/image.jpg" 
              alt="Setna Homecare Services"
              fill
              className="object-cover"
              priority // This tells the browser to load this image first
            />
          </div>
        </div>
      </div>
    </section>
  );
}