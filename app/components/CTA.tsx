export default function CTA() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold mb-6">Ready to talk about care?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Contact us today for a free, no-obligation consultation. Our care coordinators 
          are ready to help you find the best solution for your family.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition">
            Call (555) 000-0000
          </button>
          <button className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition">
            Email Us
          </button>
        </div>
      </div>
    </section>
  );
}