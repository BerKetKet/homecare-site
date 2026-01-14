export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-blue-700 rounded-3xl p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to talk about care?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Contact us today for a free consultation. Our healthcare consultants are ready to help you find the best care solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+251903137868" className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition">
            Call +251 903 137 868
          </a>
          <a href="mailto:setnahomecare@gmail.com" className="bg-blue-800 text-white border border-blue-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}