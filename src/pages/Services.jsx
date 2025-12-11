import { useState } from "react";
import {
  FaComments,
  FaGraduationCap,
  FaPassport,
  FaPlane,
  FaMapMarkedAlt,
  FaHotel,
  FaUserGraduate,
  FaUmbrellaBeach,
  FaShieldAlt,
  FaHandsHelping,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
  const [tab, setTab] = useState("students");

  const images = [
    "https://media.istockphoto.com/id/1041740040/photo/audience-raising-hands-up-while-businessman-is-speaking-in-training-at-the-office.jpg?s=612x612&w=0&k=20&c=Ng67VON1opO7LRIRssFWuawedQMi5X7tCFvaccnHzFA=",
    "https://transglobeedu.com/uploads/blogs/1694583520.JPG",
    "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F08%2FInternational-vs-Domestic-Higher-Education.webp&w=1920&q=75",
  ];

  return (
    <div className="w-full">

      {/* ====================== HERO SECTION ====================== */}
      <div className="relative w-full pt-5 md:pt-15">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
          autoplay={{ delay: 4000 }}
          className="h-[300px] sm:h-[380px] md:h-[480px]"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="w-full h-full bg-black/50 flex items-center justify-center px-4">
                  <div className="text-center text-white max-w-3xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold md:mb-2">
                      Our Services
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mb-3 leading-relaxed px-2">
                      Your journey to international education made simple with our
                      comprehensive process.
                    </p>
                    <button className="btn btn-primary px-6 sm:px-8 text-base sm:text-lg">
                      Start Your Journey Today
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ====================== TAB BUTTONS ====================== */}
      <div className="py-5 text-center">
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button
            className={`btn px-4 py-2 rounded-lg font-semibold transition-colors ${
              tab === "students" ? "bg-[#002060] text-white" : "border border-[#002060] text-[#002060]"
            }`}
            onClick={() => setTab("students")}
          >
            <FaUserGraduate className="mr-2" /> For Students
          </button>

          <button
            className={`btn px-4 py-2 rounded-lg font-semibold transition-colors ${
              tab === "tourists" ? "bg-[#002060] text-white" : "border border-[#002060] text-[#002060]"
            }`}
            onClick={() => setTab("tourists")}
          >
            <FaUmbrellaBeach className="mr-2" /> For Tourists
          </button>
        </div>
      </div>

      {/* ====================== TITLE ====================== */}
      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Your Path to International Success
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Our proven multi-step process ensures your best chance of achieving your dream.
        </p>
      </div>

      {/* ========================================================== */}
      {/* ====================== STUDENTS SECTION ================== */}
      {/* ========================================================== */}
      {tab === "students" && (
        <div>

          {/* STEP 1 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaComments className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Step 1 — Free Consultation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                This initial step is where you meet with a consultant to discuss your academic background, career goals, and preferences (like destination, budget, and desired course of study). The consultant assesses your profile and provides a preliminary overview of suitable options and the overall application process.
              </p>
              <h4 className="font-semibold mb-2">Key Activities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Academic background assessment</li>
                <li>• Career goals discussion</li>
                <li>• Destination preferences</li>
                <li>• Budget planning</li>
                <li>• Course selection guidance</li>
              </ul>
            </div>

            <img
              src="/public/1.jpg"
              className="w-full h-[370px] object-cover rounded-xl"
              alt=""
            />
          </div>

          {/* STEP 2 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <img
              src="https://i.pinimg.com/736x/f2/ea/85/f2ea85c969aa9e1c7322d8e265c2674b.jpg"
              className="w-full h-[320px] object-cover rounded-xl"
              alt=""
            />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Step 2 — University & Course Selection</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Based on the consultation, this phase focuses on identifying and shortlisting universities and courses that align with your profile and aspirations
              </p>
              <h4 className="font-semibold mb-2">Key Activities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Researching program details and entry requirements</li>
                <li>• University ranking analysis</li>
                <li>• Finalizing target institutions list</li>
                <li>• Standardized test guidance (IELTS, TOEFL, SAT, GRE)</li>
                <li>• Course compatibility assessment</li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white p-3 rounded-full text-xl">3</span>
                <h3 className="text-2xl font-bold">Step 3 — University Application Assistance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                This is the core of the application process, where the focus is on creating a strong submission package.
              </p>
              <h4 className="font-semibold mb-2">Key Activities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Document checklist preparation</li>
                <li>• Statement of Purpose (SOP) & essay review</li>
                <li>• Application submission handling</li>
                <li>• University communication follow-up</li>
                <li>• Offer letter tracking</li>
              </ul>
            </div>

            <img
              src="https://i.pinimg.com/1200x/ef/96/90/ef96906df775598abeb20f5a50c749aa.jpg"
              className="w-full h-auto rounded-xl shadow"
              alt=""
            />
          </div>

          {/* STEP 4 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <img
              src="https://i.pinimg.com/736x/d5/1d/a8/d51da88ce7e8c45eafd549fe387ddaaa.jpg"
              className="w-full h-auto rounded-xl shadow"
              alt=""
            />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white p-3 rounded-full text-xl">4</span>
                <h3 className="text-2xl font-bold">Step 4 — Visa Assistance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Once you have a confirmed offer, this step focuses on securing the necessary student visa to enter your destination country.
              </p>
              <h4 className="font-semibold mb-2">Key Activities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Document preparation guidance</li>
                <li>• Visa application filing assistance</li>
                <li>• Interview preparation coaching</li>
                <li>• Application submission support</li>
                <li>• Visa tracking and follow-up</li>
              </ul>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white p-3 rounded-full text-xl">5</span>
                <h3 className="text-2xl font-bold">Step 5 — Pre-Departure</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The final step ensures you are prepared for your transition and arrival in the new country.
              </p>
              <h4 className="font-semibold mb-2">Key Activities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Travel arrangement advice</li>
                <li>• Accommodation assistance</li>
                <li>• Forex and insurance guidance</li>
                <li>• Cultural orientation</li>
                <li>• Arrival procedure information</li>
              </ul>
            </div>

            <img
              src="https://i.pinimg.com/736x/ef/79/bb/ef79bbf1b5357c74f9d975b557c44de0.jpg"
              className="w-full h-auto rounded-xl shadow"
              alt=""
            />
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* ====================== TOURISTS SECTION ================== */}
      {/* ========================================================== */}

      {tab === "tourists" && (
        <div>

          {/* STEP 1 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaPassport className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Step 1 — Travel Consultation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Understand the visa process and check eligibility. Our expert consultants will assess your travel plans, review your eligibility for tourist visas, and provide comprehensive guidance on the application process.
              </p>
              <h1 className="font-semibold">Key Activities:</h1>
              <ul className="space-y-2">
                <li>• Visa eligibility assessment</li>
                <li>• Travel purpose evaluation</li>
                <li>• Document requirements overview</li>
                <li>• Timeline planning</li>
                <li>• Process explanation</li>
              </ul>
            </div>

            <img
              src="/mnt/data/Screenshot 2025-12-09 193015.png"
              className="w-full h-auto rounded-xl"
              alt=""
            />
          </div>

          {/* STEP 2 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <img
              src="/mnt/data/Screenshot 2025-12-09 193015.png"
              className="w-full h-auto rounded-xl"
              alt=""
            />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkedAlt className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Step 2 — Travel Itinerary</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Guidance on required documents and proper organization. We help you gather, organize, and prepare all necessary documents to ensure a complete and accurate visa application.
              </p>
              <p className="font-semibold">Key Activities:</p>
              <ul className="space-y-2">
                <li>• Document checklist provision</li>
                <li>• Financial document guidance</li>
                <li>• Travel itinerary assistance</li>
                <li>• Supporting document review</li>
                <li>• Proper organization and formatting</li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaPlane className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Step 3 — Visa & Tickets</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Assistance with form completion and timely submission. Our team ensures your application is filled out correctly and submitted on time to maximize approval chances.
              </p>
              <p className="font-semibold">Key Activities:</p>
              <ul className="space-y-2">
                <li>• Application form completion support</li>
                <li>• Accuracy verification</li>
                <li>• Online submission assistance</li>
                <li>• Fee payment guidance</li>
                <li>• Confirmation and tracking</li>
              </ul>
            </div>

            <img
              src="/mnt/data/Screenshot 2025-12-09 193015.png"
              className="w-full h-auto rounded-xl"
              alt=""
            />
          </div>

          {/* STEP 4 */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12">
            <img
              src="/mnt/data/Screenshot 2025-12-09 193015.png"
              className="w-full h-auto rounded-xl"
              alt=""
            />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaHotel className="text-primary text-3xl" />
                <h3 className="text-2xl font-bold">Step 4 — Hotel & Transport</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Travel guidance and tips for a smooth arrival in Canada. We provide essential information to help you prepare for your journey and ensure a comfortable arrival.
              </p>
              <p className="font-semibold">Key Activities:</p>
              <ul className="space-y-2">
                <li>• Travel tips and advice</li>
                <li>• Airport procedures guidance</li>
                <li>• Customs and immigration briefing</li>
                <li>• Local information and resources</li>
                <li>• Emergency contact information</li>
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* WHY CHOOSE US */}
      <div className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose NSEC Global?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          With extensive experience in visa processing, we're your trusted partner for hassle-free tourist visa applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaUserTie className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visa Experts</h3>
            <p className="text-gray-600 text-sm">
              Experienced consultants specializing in tourist visa applications for Canada and USA
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaGlobe className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
            <p className="text-gray-600 text-sm">
              Efficient application handling to ensure timely visa approval for your travel plans
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaHandsHelping className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="text-gray-600 text-sm">
              Individual attention and customized guidance for each traveler's unique situation
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Success Rate</h3>
            <p className="text-gray-600 text-sm">
              Proven track record of successful tourist visa approvals with expert application support
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
<div className="px-4">
      <div className="max-w-6xl mx-auto bg-[#002366] text-white mt-16 py-16 px-6 rounded-3xl shadow-2xl mb-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>

          <p className="text-base sm:text-lg mb-10">
            Book your free consultation today and let us help you with your tourist visa application.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
  className="
    btn bg-white text-black font-semibold 
    px-6 sm:px-10 py-3 
    text-base sm:text-lg 
    rounded-xl 
    w-full sm:w-auto 
    hover:bg-gray-500 
    transition
  "
>
  Book Free Consultation
</button>


            <button className="btn border border-white text-black text-lg px-10 py-3 rounded-xl hover:bg-gray-500  transition">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

</div>

    </div>
  );
}
