import Link from 'next/link';

export default function Equipment() {
  const equipmentList = [
    {
      name: "Medical Bed",
      sub: "2 & 3 Function",
      desc: "Adjustable hospital-grade beds with remote control for optimal patient comfort.",
      rental: "1,500 ETB/month",
      sale: "35,000 ETB"
    },
    {
      name: "Oxygen Concentrator",
      sub: "5L & 10L",
      desc: "Medical-grade oxygen concentrators for patients with respiratory conditions.",
      rental: "2,000 ETB/month",
      sale: "45,000 ETB"
    },
    {
      name: "Oxygen Cylinder",
      sub: "With Regulator",
      desc: "Medical oxygen cylinders with flow regulators for emergency therapy.",
      rental: "1,200 ETB/month",
      sale: "18,000 ETB"
    },
    {
      name: "Nebulizer",
      sub: "Portable",
      desc: "Compact nebulizers for medication delivery to patients with respiratory conditions.",
      rental: "800 ETB/month",
      sale: "6,500 ETB"
    },
    {
      name: "Wheelchair",
      sub: "Manual & Electric",
      desc: "Standard and electric wheelchairs for patients with mobility limitations.",
      rental: "1,000-3,500 ETB/month",
      sale: "12,000-65,000 ETB"
    },
    {
      name: "Mobility Aids",
      sub: "Various Types",
      desc: "Walkers, rollators, crutches, and canes for mobility assistance.",
      rental: "500-1,200 ETB/month",
      sale: "2,500-8,000 ETB"
    },
    {
      name: "Monitoring Devices",
      sub: "Digital",
      desc: "Blood pressure monitors, glucometers, and pulse oximeters.",
      rental: "600-1,000 ETB/month",
      sale: "3,500-7,000 ETB"
    },
    {
      name: "Bathroom Safety Aids",
      sub: "Various Types",
      desc: "Shower chairs, commodes, and grab bars for bathroom accessibility.",
      rental: "700-1,500 ETB/month",
      sale: "4,000-9,000 ETB"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Medical Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality medical equipment available for rent or purchase to support your home healthcare needs.
          </p>
        </div>

        {/* Carousel for Mobile, Grid for Desktop */}
        <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {equipmentList.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-0 flex flex-col p-6 rounded-2xl border border-gray-200 bg-white snap-center shadow-sm"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-800 leading-tight">{item.name}</h3>
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{item.sub}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {item.desc}
              </p>

              <div className="space-y-2 mb-6 border-t border-gray-50 pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Rental Price</span>
                  <span className="font-bold text-gray-900">{item.rental}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Sale Price</span>
                  <span className="font-bold text-gray-900">{item.sale}</span>
                </div>
              </div>

              <a 
                href="tel:+251903137868" 
                className="w-full bg-blue-50 text-blue-700 py-3 rounded-xl font-bold text-sm text-center hover:bg-blue-700 hover:text-white transition-all border border-blue-100"
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <p className="text-center text-gray-400 text-xs mt-4 md:hidden italic">
          ← Swipe to see more equipment →
        </p>
      </div>
    </section>
  );
}