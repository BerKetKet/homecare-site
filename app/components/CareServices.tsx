import Link from 'next/link';

export default function CareServices() {
  const services = [
    {
      title: "Nursing Care",
      desc: "Professional nursing services including medication administration, wound care, vital signs monitoring, and post-surgical care."
    },
    {
      title: "Palliative and Hospice Care",
      desc: "Compassionate end-of-life care focused on comfort, dignity and quality of life for patients with terminal illnesses and their families."
    },
    {
      title: "Physiotherapy Services",
      desc: "Expert physical therapy for rehabilitation, pain management, mobility improvement and post-surgery recovery through personalized exercise programs."
    },
    {
      title: "Specialized Therapies",
      desc: "Comprehensive therapy services including speech therapy, occupational therapy, and cognitive rehabilitation for enhanced recovery and daily functioning."
    },
    {
      title: "Physiotherapy",
      desc: "Customized rehabilitation programs to improve mobility, strength, and function after injury, surgery, or for chronic conditions."
    },
    {
      title: "Medication Management",
      desc: "Comprehensive medication oversight including prescription refills, administration, and monitoring for side effects and efficacy."
    },
    {
      title: "Elder Care",
      desc: "Specialized care for elderly patients including assistance with daily activities, companionship, and health monitoring."
    },
    {
      title: "Chronic Disease Management",
      desc: "Ongoing care and monitoring for patients with diabetes, hypertension, heart disease, and other chronic conditions."
    },
    {
      title: "Health Education",
      desc: "Patient and caregiver education on disease management, medication adherence, nutrition, and preventive care."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Setna Homecare, we offer a wide range of professional healthcare services delivered in the comfort of your home.
          </p>
        </div>

        {/* 
            MOBILE: flex-nowrap + overflow-x-auto (Carousel)
            DESKTOP: md:grid (3-column layout)
        */}
        <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-0 flex flex-col p-8 rounded-2xl border border-gray-100 bg-slate-50 snap-center shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>
              <Link 
                href="/contact" 
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center gap-1"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex flex-col items-center mt-4 md:hidden">
          <p className="text-gray-400 text-xs italic mb-2">Swipe to see all 9 services</p>
          <div className="flex gap-1">
             <div className="w-4 h-1 rounded-full bg-blue-600"></div>
             <div className="w-1 h-1 rounded-full bg-gray-200"></div>
             <div className="w-1 h-1 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}