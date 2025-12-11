import React from "react";
import {
  FaArrowRight,
  FaBullseye,
  FaFlag,
  FaGlobe,
  FaGlobeAmericas,
  FaHeart,
  FaShieldAlt,
  FaStar,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Founder & CEO",
      description:
        "PhD in International Education with 15+ years of experience helping students achieve their dreams.",
      image: "https://i.pinimg.com/736x/ef/97/25/ef972507d073f998e8091814528e86d1.jpg",
      icon: <FaUserTie className="text-primary text-3xl" />,
    },
    {
      name: "Mohammad Rahman",
      role: "Senior Visa Consultant",
      description:
        "Certified immigration consultant with 95% visa success rate across multiple countries.",
      image: "https://i.pinimg.com/736x/bd/3b/16/bd3b16868f55313d5d70415d8b969a91.jpg",
      icon: <FaUserGraduate className="text-primary text-3xl" />,
    },
    {
      name: "Lisa Thompson",
      role: "University Relations Manager",
      description:
        "Masters in International Relations, managing partnerships with 50+ universities worldwide.",
      image: "https://i.pinimg.com/736x/6e/92/b8/6e92b82848eade0fd33f0cff335ee2d0.jpg",
      icon: <FaGlobeAmericas className="text-primary text-3xl" />,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-[#002060] text-white py-30 text-center px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About NSEC Global</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Empowering students worldwide to achieve their international education dreams through expert guidance, personalized support, and an unwavering commitment to excellence.
        </p>
      </section>

      {/* STORY SECTION */}
<section className="py-20 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* TEXT */}
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
      Our Story
    </h2>
    <p className="text-gray-600 leading-relaxed text-justify md:text-left">
      Founded in 2016, NSEC Global began with a simple yet powerful mission:
      <span className="font-semibold text-gray-800">
        {" "} making international education accessible to ambitious students{" "}
      </span>
      from Bangladesh and beyond. What started as a small consultancy has now grown into a trusted partner for thousands of students worldwide.
    </p>
    <p className="text-gray-600 leading-relaxed text-justify md:text-left">
      Our founder, <span className="font-medium text-gray-800">Dr. Sarah Ahmed</span>, recognized early the challenges students face while navigating complex global education systems. With her extensive expertise in international education and immigration, she established NSEC Global to help students bridge that gap with confidence.
    </p>
    <p className="text-gray-600 leading-relaxed text-justify md:text-left">
      Today, we proudly stand beside over <span className="font-semibold text-indigo-600">2000 successful students</span> in their study-abroad journeys — achieving an impressive <span className="font-semibold text-indigo-600">95% visa success rate</span> and forming partnerships with top-ranked universities across five countries.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="btn bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 mt-4 flex items-center gap-2 shadow-md">
        Start Your Journey <FaArrowRight />
      </button>
    </div>
  </div>

  {/* IMAGE */}
  <div className="flex justify-center md:justify-end mt-6 md:mt-0">
    <img
      src="/public/office.png"
      alt="NSEC Global Office"
      className="rounded-xl shadow-xl w-full max-w-[520px] h-auto object-cover"
    />
  </div>
</section>


      {/* MISSION & VISION */}
      <div className="w-full bg-gray-50 py-20 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaFlag className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students with the knowledge, resources, and support they need to successfully pursue international education opportunities, while ensuring a seamless and stress-free experience throughout their journey.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaBullseye className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading international education consultancy, recognized for our integrity, expertise, and commitment to student success, while building bridges between cultures and creating global citizens.
            </p>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="w-full bg-white py-20 px-4 md:px-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            These fundamental principles guide everything we do and shape our commitment to student success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: FaHeart, title: "Student-Centric Approach", desc: "Every decision we make is focused on what’s best for our studentsʼ future success and happiness." },
            { icon: FaShieldAlt, title: "Integrity & Transparency", desc: "We maintain the highest ethical standards and provide honest, transparent guidance throughout the process." },
            { icon: FaStar, title: "Excellence in Service", desc: "We strive for excellence in every interaction, ensuring exceptional service quality and outcomes." },
            { icon: FaGlobe, title: "Global Perspective", desc: "Our international experience and partnerships provide students with truly global opportunities." },
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center">{value.title}</h3>
              <p className="text-gray-600 text-center mt-3">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="py-16 bg-base-100 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-2">Meet Our Expert Team</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Our experienced professionals are dedicated to helping you achieve your international education goals.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="card w-full sm:w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <figure>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body text-center">
                <div className="flex justify-center">{member.icon}</div>
                <h3 className="font-bold text-xl mt-2">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY TIMELINE */}
      <section className="py-20 bg-white px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our Journey</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Key milestones that have shaped NSEC Global into the trusted education consultancy we are today.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-indigo-200 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {[
              { year: "2016", desc: "NSEC Global founded with a vision to democratize international education." },
              { year: "2018", desc: "Reached 500+ successful student placements across UK, Canada, and Australia." },
              { year: "2020", desc: "Expanded services to include USA and Sweden; launched virtual counseling." },
              { year: "2022", desc: "Achieved 95% visa success rate and partnerships with 50+ universities." },
              { year: "2024", desc: "Celebrating 2000+ successful student placements and continued growth." },
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col sm:flex-row items-center w-full ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <div className="sm:w-1/2 p-2">
                  <div className="bg-white shadow-md border rounded-xl p-6 inline-block w-full">
                    <h3 className="text-xl font-bold text-indigo-900">{item.year}</h3>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                </div>

                <div className="w-10 relative my-4 sm:my-0">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full absolute left-1/2 -translate-x-1/2"></div>
                </div>

                <div className="sm:w-1/2 p-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
