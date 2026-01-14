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
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4 text-lg">Professional care tailored to your family's needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}