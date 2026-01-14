export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Setna Homecare</div>
          <p className="text-sm leading-relaxed text-gray-400">
            Professional healthcare consultancy and compassionate homecare services in Addis Ababa.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Alfoz Plaza, 6th Floor<br />Bole, Addis Ababa, Ethiopia</li>
            <li>+251 903 137 868</li>
            <li className="break-all">setnahomecare@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Business Hours</h4>
          <p className="text-sm text-gray-400">
            Mon - Sat: 8:30 AM - 6:30 PM<br />
            Emergency Support: 24/7
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Setna Homecare and Healthcare Consultancy. All rights reserved.
      </div>
    </footer>
  );
}