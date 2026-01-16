export default function Services() {
  const services = [
    {
      title: "Nursing Care",
      desc: "Professional nursing services including medication administration, wound care, vital signs monitoring, and post-surgical care.",
      icon: ""
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
    },
    {
      title: "Respite Care",
      desc: "Temporary relief for primary caregivers to rest and recharge.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4 text-lg">Professional care tailored to your family's needs.</p>
        </div>

        {/* Carousel on Mobile, Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-0 p-8 border border-gray-200 rounded-2xl shadow-sm bg-white snap-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <p className="text-center text-gray-400 text-xs mt-2 md:hidden italic">
          ← Swipe to see more →
        </p>
      </div>
    </section>
  );
}