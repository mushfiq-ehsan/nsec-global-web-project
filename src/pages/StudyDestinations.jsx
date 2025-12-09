import { useState } from "react";
import {
  FaUniversity,
  FaBookOpen,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaUmbrellaBeach,
  FaHome,
  FaBus,
  FaHospital,
  FaShoppingCart,
  FaShieldAlt,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GoVideo } from "react-icons/go";
import { ImSpoonKnife } from "react-icons/im";

export default function StudyDestinations() {
  const [tab, setTab] = useState("students");
  const [activeStudent, setActiveStudent] = useState("UK");
  const [activeTourist, setActiveTourist] = useState("USA");

  const universities = [
    {
      name: "University of Oxford",
      location: "Oxford",
      programs: ["Medicine", "Law", "Engineering", "Business"],
    },
    {
      name: "University of Cambridge",
      location: "Cambridge",
      programs: ["Computer Science", "Mathematics", "Natural Sciences", "Economics"],
    },
    {
      name: "Imperial College London",
      location: "London",
      programs: ["Engineering", "Medicine", "Business", "Computing"],
    },
    {
      name: "London School of Economics",
      location: "London",
      programs: ["Economics", "Politics", "Law", "Management"],
    },
    {
      name: "University College London",
      location: "London",
      programs: ["Architecture", "Medicine", "Engineering", "Arts"],
    },
  ];

  const destinations = {
    UK: {
      title: "Study in United Kingdom",
      description:
        "The UK offers world-renowned universities with rich academic traditions.",
      overview:
        "The United Kingdom (UK) is a country in northwestern Europe, made up of England, Scotland, Wales, and Northern Ireland. It has a rich history, vibrant culture, and diverse landscapes ranging from bustling cities like London to scenic areas such as the Scottish Highlands and Welsh mountains. The UK is a constitutional monarchy with a parliamentary system, and its economy is one of the largest in the world, driven by finance, technology, and services. Renowned for its prestigious universities like Oxford and Cambridge, the UK attracts students from around the globe. It is also famous for its contributions to literature, music, and sports, making it a popular destination for both education and tourism.",
      stats: [
        { value: "150+", label: "Universities", icon: <FaUniversity /> },
        { value: "500+", label: "Programs", icon: <FaBookOpen /> },
        { value: "2.3M+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/736x/43/d9/25/43d925ce787ec1b4d17c307254e88770.jpg",
    },
    Canada: {
      title: "Study in Canada",
      description:
        "Canada offers high-quality education and a multicultural environment.",
      overview:
        "Canada is the second-largest country in the world, located in North America, and is known for its vast landscapes, including mountains, forests, and lakes. It is a multicultural and bilingual nation, with English and French as its official languages. Canada has a parliamentary democracy and a constitutional monarchy, with Ottawa as its capital. The country has a strong and diverse economy, driven by natural resources, technology, and services. Canada is also renowned for its high-quality education system, welcoming environment for international students, and vibrant cities like Toronto, Vancouver, and Montreal, making it a popular destination for both living and studying.",
      stats: [
        { value: "90+", label: "Universities", icon: <FaUniversity /> },
        { value: "350+", label: "Programs", icon: <FaBookOpen /> },
        { value: "800K+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/736x/c7/bd/a9/c7bda92b2d74c51ed5b18ee8b6a3d489.jpg",
    },
    USA: {
      title: "Study in United States",
      description: "The USA is home to world-leading universities.",
      overview:
        "The United States of America (USA) is a large and diverse country located in North America, consisting of 50 states and a federal district, Washington, D.C., which is the capital. It is known for its economic and technological power, cultural influence, and diverse landscapes ranging from bustling cities like New York and Los Angeles to natural wonders such as the Grand Canyon and Yellowstone. The USA is a federal republic with a democratic system, led by an elected president. It has a highly developed economy, world-class universities, and a rich cultural heritage in music, film, literature, and sports, making it a top destination for education, business, and tourism.",
      stats: [
        { value: "170+", label: "Universities", icon: <FaUniversity /> },
        { value: "700+", label: "Programs", icon: <FaBookOpen /> },
        { value: "1.1M+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/736x/22/43/a5/2243a53dd1297587b8b34dc9180f5a8c.jpg",
    },
    Sweden: {
      title: "Study in Sweden",
      description: "Sweden offers innovation-driven education and top-tier opportunities.",
      overview:
        "Sweden is a Nordic country in Northern Europe, known for its stunning natural landscapes, including forests, lakes, and the northern lights. Its capital, Stockholm, is a vibrant city blending modern innovation with historical charm. Sweden is a constitutional monarchy with a parliamentary democracy and is recognized for its high standard of living, strong social welfare system, and commitment to sustainability. The country has a highly developed economy driven by technology, manufacturing, and services, and is home to world-class universities that attract international students. Sweden is also famous for its rich cultural heritage, design, music, and progressive society, making it an appealing destination for both study and travel.",
      stats: [
        { value: "50+", label: "Universities", icon: <FaUniversity /> },
        { value: "200+", label: "Programs", icon: <FaBookOpen /> },
        { value: "400K+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/1200x/ae/af/96/aeaf963a8f7614dcb25f4cfe90ce269d.jpg",
    },
    Australia: {
      title: "Study in Australia",
      description:
        "Australia features highly ranked universities and a vibrant lifestyle.",
      overview:
        "Australia is a vast country and continent located in the Southern Hemisphere, known for its unique wildlife, natural wonders like the Great Barrier Reef and Uluru, and diverse landscapes ranging from deserts to lush forests. Its capital is Canberra, while Sydney and Melbourne are major cultural and economic hubs. Australia is a constitutional monarchy with a parliamentary democracy and has a highly developed economy driven by mining, agriculture, services, and technology. The country is renowned for its high-quality education system, welcoming international students, and vibrant multicultural society. With a rich cultural heritage, outdoor lifestyle, and iconic landmarks, Australia is a popular destination for study, work, and tourism.",
      stats: [
        { value: "43+", label: "Universities", icon: <FaUniversity /> },
        { value: "300+", label: "Programs", icon: <FaBookOpen /> },
        { value: "700K+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/1200x/75/72/fb/7572fb25de3bc9d3b8c93922e796064a.jpg",
    },
  };

  const touristData = {
    USA: {
      title: "Visit United States",
      description:
        "Explore diverse landscapes, vibrant cities, and world-class attractions across America.",
      stats: [
        { value: "50+", label: "Destinations" },
        { value: "1000+", label: "Attractions" },
        { value: "80M+/year", label: "Visitors" },
      ],
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    Canada: {
      title: "Visit Canada",
      description:
        "Experience Canada’s natural wonders — from the Rocky Mountains to Toronto’s urban lifestyle.",
      stats: [
        { value: "40+", label: "Destinations" },
        { value: "800+", label: "Attractions" },
        { value: "22M+/year", label: "Visitors" },
      ],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="bg-blue-600 text-white text-center py-16 px-4 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Study Destinations</h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg opacity-90">
          Explore world-class education opportunities in top destinations.
        </p>
      </div>

      {/* MAIN TABS */}
      <div className="py-5 text-center">
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              tab === "students" ? "bg-[#002060] text-white" : "bg-blue-500 text-white"
            }`}
            onClick={() => setTab("students")}
          >
            <FaUserGraduate className="inline mr-2" /> For Students
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              tab === "tourists" ? "bg-[#002060] text-white" : "bg-blue-500 text-white"
            }`}
            onClick={() => setTab("tourists")}
          >
            <FaUmbrellaBeach className="inline mr-2" /> For Tourists
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* TOURISTS */}
        {tab === "tourists" && (
          <div>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {Object.keys(touristData).map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveTourist(c)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTourist === c
                      ? "bg-blue-600 text-white border-blue-600 shadow"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Card */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
              <img
                src={touristData[activeTourist].image}
                alt={activeTourist}
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">{touristData[activeTourist].title}</h1>
                <p className="text-gray-600 mb-6">{touristData[activeTourist].description}</p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {touristData[activeTourist].stats.map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <h2 className="text-xl font-bold text-blue-600">{s.value}</h2>
                      <p className="text-gray-600 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300 w-full md:w-auto">
                  Plan Your Trip
                </button>
              </div>
            </div>

            {/* Universities */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-10">
                Top Universities in {activeTourist}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((u, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg hover:shadow-xl transition-all rounded-xl p-5 flex flex-col"
                  >
                    <h3 className="text-lg font-bold mb-2">{u.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <p>{u.location}</p>
                    </div>
                    <p className="font-semibold text-gray-700 mb-2">Popular Programs:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {u.programs.map((p, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs sm:text-sm"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <button className="btn btn-outline btn-sm flex-1">View Details</button>
                      <button className="btn btn-primary btn-sm flex-1">Apply Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STUDENTS */}
        {tab === "students" && (
          <div className="pt-10">
            {/* Country Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {Object.keys(destinations).map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveStudent(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeStudent === c
                      ? "bg-blue-600 text-white shadow"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Main Info */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-16">
              <img
                src={destinations[activeStudent].image}
                alt={destinations[activeStudent].title}
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-xl"
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">{destinations[activeStudent].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{destinations[activeStudent].description}</p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {destinations[activeStudent].stats.map((stat, i) => (
                    <div key={i} className="bg-blue-50 rounded-xl py-5 text-center border border-blue-100">
                      <div className="flex justify-center text-blue-600 text-3xl mb-2">{stat.icon}</div>
                      <p className="text-xl font-bold text-blue-700">{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 w-full md:w-auto">
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4">Overview of {activeStudent}</h3>
              <div className="bg-gray-50 p-6 rounded-xl shadow">{destinations[activeStudent].overview}</div>
            </div>

            {/* Living Standards */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-10">Living Standards & Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "Accommodation", desc: "Modern student housing & on-campus living options.", icon: <FaHome className="text-2xl text-blue-600" /> },
                  { title: "Transportation", desc: "Affordable and reliable public transport.", icon: <FaBus className="text-2xl text-blue-600" /> },
                  { title: "Healthcare", desc: "High-quality medical & international student support.", icon: <FaHospital className="text-2xl text-blue-600" /> },
                  { title: "Shopping & Dining", desc: "Diverse food, shopping, and cultural options.", icon: <FaShoppingCart className="text-2xl text-blue-600" /> },
                  { title: "Safety", desc: "Safe environment with low crime rate.", icon: <FaShieldAlt className="text-2xl text-blue-600" /> },
                  { title: "Culture", desc: "Rich heritage, museums, festivals & global communities.", icon: <FaGlobe className="text-2xl text-blue-600" /> },
                ].map((item, i) => (
                  <div key={i} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">{item.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Living Cost */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Approximate Living Cost</h3>
              <div className="max-w-3xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8">
                {[
                  { title: "Accommodation", price: "£400-800/month", icon: <FaHome className="text-2xl text-blue-600" /> },
                  { title: "Food & Groceries", price: "£150-250/month", icon: <ImSpoonKnife className="text-2xl text-blue-600" /> },
                  { title: "Transportation", price: "£50-100/month", icon: <FaBus className="text-2xl text-blue-600" /> },
                  { title: "Utilities", price: "£40-80/month", icon: <FaLightbulb className="text-2xl text-blue-600" /> },
                  { title: "Entertainment", price: "£50-100/month", icon: <GoVideo className="text-2xl text-blue-600" /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 mb-3 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <span>{item.icon}</span>
                      <p className="font-semibold text-gray-800">{item.title}</p>
                    </div>
                    <p className="text-blue-700 font-semibold">{item.price}</p>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row justify-between text-lg font-bold text-blue-700">
                  <span>Total Estimated Cost</span>
                  <span>£690-1,330/month</span>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  * Costs may vary based on lifestyle, location, and personal preferences.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="w-full flex justify-center px-4 mb-10">
        <div className="bg-[#002366] text-white text-center py-12 px-4 sm:px-6 rounded-2xl max-w-6xl w-full shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            Take the first step towards your international education dreams.
            Our expert counselors are here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
            <button className="bg-white text-[#002366] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow hover:bg-gray-100 transition w-full sm:w-auto">
              Book Free Consultation
            </button>
            <button className="border border-white text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-[#002366] transition w-full sm:w-auto justify-center">
              <FiPhone className="text-lg" /> Call Now: 01805-021560
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
