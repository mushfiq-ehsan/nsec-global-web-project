import { FaComments, FaGlobe, FaGraduationCap, FaHandsHelping, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
  const images = [
    "https://media.istockphoto.com/id/1041740040/photo/audience-raising-hands-up-while-businessman-is-speaking-in-training-at-the-office.jpg?s=612x612&w=0&k=20&c=Ng67VON1opO7LRIRssFWuawedQMi5X7tCFvaccnHzFA=",
    "https://transglobeedu.com/uploads/blogs/1694583520.JPG",
    "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F08%2FInternational-vs-Domestic-Higher-Education.webp&w=1920&q=75",
  ];

  return (
    <div className="w-full">
      {/* ====================== HERO ====================== */}
      <div className="relative  w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
          autoplay={{ delay: 4000 }}
          className="h-[480px]"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-[480px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="w-full h-full bg-black/50 flex items-center justify-center px-4">
                  <div className="text-center text-white max-w-3xl">
                    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                    <p className="text-lg mb-8 leading-relaxed">
                      Your journey to international education made simple with
                      our comprehensive 5-step process.
                    </p>
                    <button className="btn btn-primary px-8 text-lg">
                      Start Your Journey Today
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ====================== TITLE ====================== */}
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Your Path to International Education
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our proven 5-step process ensures your best chance of success.
        </p>
      </div>

      {/* =======================================================
                      STEP 1 — PERFECTED
      ======================================================== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
        {/* TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaComments className="text-primary text-3xl" />
            <h3 className="text-2xl font-bold">Step 1 — Free Consultation</h3>
          </div>

          <p className="text-gray-600 mb-4">
            Meet with our consultant to discuss academic background, career
            goals and study preferences.
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

        {/* IMAGE SLIDER */}
        <img
          src="https://i.pinimg.com/736x/9c/dc/c8/9cdcc83222db546565c86242c089de95.jpg"
          className="w-full h-[330px] object-cover rounded-xl"
          alt=""
        />
      </div>

      {/* =======================================================
                      STEP 2 — PERFECTED
      ======================================================== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
        {/* IMAGE SLIDER */}
        <img
          src="https://i.pinimg.com/736x/f2/ea/85/f2ea85c969aa9e1c7322d8e265c2674b.jpg"
          className="w-full h-[330px] object-cover rounded-xl"
          alt=""
        />

        {/* TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-primary text-3xl" />
            <h3 className="text-2xl font-bold">
              Step 2 — University & Course Selection
            </h3>
          </div>

          <p className="text-gray-600 mb-4">
            We help you shortlist universities and courses that align with your
            academic profile and aspirations.
          </p>

          <h4 className="font-semibold mb-2">Key Activities:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Researching entry requirements</li>
            <li>• Ranking analysis</li>
            <li>• Finalizing university list</li>
            <li>• IELTS / TOEFL / SAT / GRE guidance</li>
            <li>• Course compatibility assessment</li>
          </ul>
        </div>
      </div>

      {/* =======================================================
                STEP 3 — UNIVERSITY APPLICATION
======================================================== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
        {/* TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white p-3 rounded-full text-xl">
              3
            </span>
            <h3 className="text-2xl font-bold">
              Step 3 — University Application Assistance
            </h3>
          </div>

          <p className="text-gray-600 mb-4">
            This is the core of the application process where the focus is on
            creating a strong university submission package.
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

        {/* IMAGE */}
        <img
          src="https://i.pinimg.com/1200x/ef/96/90/ef96906df775598abeb20f5a50c749aa.jpg"
          className="w-full h-[330px] object-cover rounded-xl shadow"
          alt="University Application"
        />
      </div>

      {/* =======================================================
                STEP 4 — VISA ASSISTANCE
======================================================== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
        {/* IMAGE */}
        <img
          src="https://i.pinimg.com/736x/d5/1d/a8/d51da88ce7e8c45eafd549fe387ddaaa.jpg"
          className="w-full h-[330px] object-cover rounded-xl shadow"
          alt="Visa Help"
        />

        {/* TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white p-3 rounded-full text-xl">
              4
            </span>
            <h3 className="text-2xl font-bold">Step 4 — Visa Assistance</h3>
          </div>

          <p className="text-gray-600 mb-4">
            Once you have a confirmed offer, this step focuses on securing the
            necessary student visa for your destination country.
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

      {/* =======================================================
                STEP 5 — PRE-DEPARTURE SUPPORT
======================================================== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
        {/* TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white p-3 rounded-full text-xl">
              5
            </span>
            <h3 className="text-2xl font-bold">
              Step 5 — Pre-Departure Support
            </h3>
          </div>

          <p className="text-gray-600 mb-4">
            The final step ensures you are fully prepared for your transition
            and arrival in your new country.
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

        {/* IMAGE */}
        <img
          src="https://i.pinimg.com/736x/ef/79/bb/ef79bbf1b5357c74f9d975b557c44de0.jpg"
          className="w-full h-[330px] object-cover rounded-xl shadow"
          alt="Pre-departure"
        />
      </div>

        {/* =======================================================
               Why Choose Section
======================================================== */}
    <div className="w-full">

      {/* ========================= WHY CHOOSE NSEC ========================= */}
      <div className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose NSEC Global?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          With years of experience and thousands of successful placements, we're your trusted
          partner for international education.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaUserTie className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">
              Certified counselors with deep knowledge of international education systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaGlobe className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5 Countries</h3>
            <p className="text-gray-600 text-sm">
              Partnerships with top universities in USA, UK, Canada, Sweden & Australia.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaHandsHelping className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
            <p className="text-gray-600 text-sm">
              One-on-one guidance tailored to your academic and career goals.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Success Rate</h3>
            <p className="text-gray-600 text-sm">
              Proven record of successful visa approvals & university admissions.
            </p>
          </div>

        </div>
      </div>

      {/* ======================== READY TO START CTA ======================== */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>

          <p className="text-lg mb-10">
            Book your free consultation today and take the first step toward your international
            education dreams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white px-8 text-lg">
              Book Free Consultation
            </button>

            <button className="btn btn-outline border-white text-white text-lg px-8 hover:bg-white hover:text-blue-700">
              Download Brochure
            </button>
          </div>

        </div>
      </div>
    </div>


    </div>
  );
}
