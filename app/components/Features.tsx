export default function Features() {
  const points = [
    {
      title: "Certified Caregivers",
      description: "Every member of our team undergoes rigorous background checks and specialized training."
    },
    {
      title: "Custom Care Plans",
      description: "We don't believe in one-size-fits-all. We create a plan specifically for your loved one."
    },
    {
      title: "24/7 Availability",
      description: "Our dedicated support team is available around the clock for emergencies and questions."
    }
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Large Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose HomeCare Plus?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We understand that inviting someone into your home is a big decision. 
            We treat every patient like they are our own family.
          </p>
          <button className="text-blue-600 font-bold hover:underline">
            Learn more about our hiring process &rarr;
          </button>
        </div>

        {/* Right Side: List of Features */}
        <div className="md:w-1/2 space-y-8">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}