export const Home = () => {
  return (
    <>
      {/* First section start */}
      <section className="container mx-auto px-4 lg:w-11/12">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-4">
            <div className="py-8 lg:py-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-heading1 mb-4">
                Dynamic Tech Solutions and Tailored Digital Marketing Strategies
              </h1>
              <p className="text-paragraph lg:text-lg text-gray-600 mb-6">
                Empower your brand's digital evolution with Brava 360 Digital,
                your dedicated guide in digital marketing and design. Ready to
                make a bold impact? Connect with us for a personalized
                consultation, and let's fuel your journey to online success.
              </p>
              <button className="bg-purple hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                Schedule Your FREE Audit Call Now
              </button>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="lg:w-1/2 lg:pl-4 relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
            >
              {/* Empty div for image */}
            </div>
          </div>
        </div>
      </section>
      {/* First section end */}
    </>
  );
};
