export default function Services() {
  const services = [
    {
      title: "Personal Care",
      desc: "Assistance with daily living, including bathing, dressing, and grooming.",
      icon: "🏠"
    },
    {
      title: "Skilled Nursing",
      desc: "Professional medical care provided by registered nurses in your home.",
      icon: "🩺"
    },
    {
      title: "Companionship",
      desc: "Social interaction and emotional support to improve quality of life.",
      icon: "🤝"
    },
    {
      title: "Respite Care",
      desc: "Temporary relief for primary caregivers to rest and recharge.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4 text-lg">Professional care tailored to your family's needs.</p>
        </div>

        {/* 
           The Container: 
           - 'flex' + 'flex-nowrap' makes it a single row on mobile.
           - 'md:grid' turns it into a 4-column box on desktop.
        */}
        <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-0 p-8 border border-gray-200 rounded-2xl shadow-sm bg-white snap-center flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Indicators (Hidden on Desktop) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}