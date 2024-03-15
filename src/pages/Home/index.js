import ClientsLogos from "../../Components/ClientLogo/ClientsLogos";
import { HomeBanner, SecondImage } from "../../Assets/Images";
import Heading from "../../Components/Titles/Heading";
import Paragraph from "../../Components/Titles/Text";
import ButtonMain from "../../Components/ButtonMain";

export const Home = () => {
  return (
    <>
      {/* First section start */}
      <section className="bg-background2 py-16 ">
        <div className="container mx-auto px-4 lg:w-11/12">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column */}
            <div className="lg:w-1/2 lg:pr-4">
              <div className="py-8 lg:py-16">
                <Heading mobileFontSize={true} LineHeight={true}>
                  Dynamic Tech Solutions and Tailored Digital Marketing
                  Strategies
                </Heading>
                <Paragraph mobileFontSize={true} mobileLineHeight={true}>
                  Empower your brand's digital evolution with Brava 360 Digital,
                  your dedicated guide in digital marketing and design. Ready to
                  make a bold impact? Connect with us for a personalized
                  consultation, and let's fuel your journey to online success.
                </Paragraph>
                {/* <button className="bg-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                  Schedule Your FREE Audit Call Now
                </button> */}
                <ButtonMain>Schedule Your FREE Audit Call Now</ButtonMain>
              </div>
            </div>

            {/* Right Column with Image */}
            <div className="lg:w-1/2 lg:pl-4 relative   ">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${HomeBanner})`,
                  height: "594px",
                  top: "45px",
                  // zIndex: "-9",
                  left: "-220px",
                }}
              >
                {/* Empty div for image */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* First section end */}

      {/* Second reuse section trusted by many start */}
      <ClientsLogos />
      {/* Second reuse section trusted by many End */}

      {/* Third section start */}
      <section className="bg-background3 py-16">
        <div className="container mx-auto px-4 lg:w-11/12">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column with Image */}
            <div className="lg:w-1/2 lg:pr-4 mb-8 lg:mb-0">
              <img
                src={SecondImage}
                alt="Illustration"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Column with Content */}
            <div className="lg:w-1/2 lg:pl-4">
              <div className="flex items-center mb-4">
                <div className="border-l-4 border-white mr-4"></div>
                <p className="font-inter font-medium text-accent">
                  ROI Centric Solutions
                </p>
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-heading2 mb-4">
                Delivering Exceptional ROI through Strategic CRO Solutions
              </h2>
              <p className="font-inter font-paragraph text-paragraphgray mb-6">
                Brava 360 is dedicated to propelling your digital ROI. Utilizing
                the power of Conversion Rate Optimization (CRO), we take your
                business to unprecedented heights in the digital sphere. With
                our bespoke strategies and meticulous improvements, we ensure
                every aspect of your online presence contributes effectively to
                your profitability. <br></br>
                <span className="font-bold text-black">
                  With our ROI-centric approach and expert team, you can expect:
                </span>
              </p>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-accent mr-3"></div>
                <p className="font-inter font-paragraph text-paragraphgray">
                  List Item 1
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-accent mr-3"></div>
                <p className="font-inter font-paragraph text-paragraphgray">
                  List Item 2
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-accent mr-3"></div>
                <p className="font-inter font-paragraph text-paragraphgray">
                  List Item 3
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-accent mr-3"></div>
                <p className="font-inter font-paragraph text-paragraphgray">
                  List Item 4
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-accent mr-3"></div>
                <p className="font-inter font-paragraph text-paragraphgray">
                  List Item 5
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-accent mr-3"></div>
                <p className="font-inter font-paragraph text-paragraphgray">
                  List Item 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Third section End */}

      {/* Fourth Section start */}

      {/* Fourth Section end */}
    </>
  );
};
