export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-white mb-4">HomeCare Plus</div>
          <p className="text-sm leading-relaxed text-gray-400">
            Professional and compassionate homecare services 
            dedicated to improving the quality of life for our clients and their families.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>123 Care Street</li>
            <li>Health City, ST 12345</li>
            <li>(555) 000-0000</li>
            <li>info@homecareplus.com</li>
          </ul>
        </div>

        {/* Column 4: Status */}
        <div>
          <h4 className="text-white font-bold mb-4">Business Hours</h4>
          <p className="text-sm text-gray-400">
            Mon - Fri: 9:00 AM - 6:00 PM<br />
            Emergency Care: 24/7
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-sm text-center">
        © {new Date().getFullYear()} HomeCare Plus. All rights reserved.
      </div>
    </footer>
  );
}