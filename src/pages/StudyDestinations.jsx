import { useState } from "react";
import { FaUniversity, FaBookOpen, FaUserGraduate, FaMapMarkerAlt } from "react-icons/fa";

export default function StudyDestinations() {
  const [active, setActive] = useState("UK");

  const universities = [
    {
      rank: "#1 in UK",
      name: "University of Oxford",
      location: "Oxford",
      programs: ["Medicine", "Law", "Engineering", "Business"],
    },
    {
      rank: "#2 in UK",
      name: "University of Cambridge",
      location: "Cambridge",
      programs: [
        "Computer Science",
        "Mathematics",
        "Natural Sciences",
        "Economics",
      ],
    },
    {
      rank: "#3 in UK",
      name: "Imperial College London",
      location: "London",
      programs: ["Engineering", "Medicine", "Business", "Computing"],
    },
    {
      rank: "#4 in UK",
      name: "London School of Economics",
      location: "London",
      programs: ["Economics", "Politics", "Law", "Management"],
    },
    {
      rank: "#5 in UK",
      name: "University College London",
      location: "London",
      programs: ["Architecture", "Medicine", "Engineering", "Arts"],
    },
    {
      rank: "#6 in UK",
      name: "University of Edinburgh",
      location: "Edinburgh",
      programs: ["Medicine", "Veterinary", "Business", "Arts"],
    },
    {
      rank: "#7 in UK",
      name: "King's College London",
      location: "London",
      programs: ["Medicine", "Law", "Business", "Humanities"],
    },
    {
      rank: "#8 in UK",
      name: "University of Manchester",
      location: "Manchester",
      programs: ["Engineering", "Business", "Medicine", "Computer Science"],
    },
  ];

  const destinations = {
    UK: {
      title: "Study in United Kingdom",
      description:
        "The UK offers world-renowned universities with rich academic traditions, cutting-edge research facilities, and globally recognized degrees. Experience diverse cultures while studying in historic cities.",
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
        "Canada offers high-quality education, affordable tuition, and a welcoming multicultural environment. A top choice for international students.",
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
      description:
        "The USA is home to world-leading universities, cutting-edge research opportunities, and unlimited career paths.",
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
      description:
        "Sweden offers innovation-driven education, beautiful landscapes, and top-tier academic opportunities.",
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
        "Australia features highly ranked universities and a vibrant lifestyle, making it a top destination for international students.",
      stats: [
        { value: "43+", label: "Universities", icon: <FaUniversity /> },
        { value: "300+", label: "Programs", icon: <FaBookOpen /> },
        { value: "700K+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/1200x/75/72/fb/7572fb25de3bc9d3b8c93922e796064a.jpg",
    },
  };

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-3">Study Destinations</h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Explore world-class education opportunities in top destinations.
          Choose from our carefully selected universities and programs.
        </p>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex flex-wrap justify-center gap-4 py-10">
        {[
          ["UK", "United Kingdom"],
          ["Canada", "Canada"],
          ["USA", "United States"],
          ["Sweden", "Sweden"],
          ["Australia", "Australia"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-6 py-2 rounded-lg border transition-all
              ${
                active === key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6 pb-20">
        {/* IMAGE */}
        <img
          src={destinations[active].image}
          className="w-full h-[330px] rounded-xl object-cover shadow"
          alt={destinations[active].title}
        />

        {/* TEXT SECTION */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {destinations[active].title}
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {destinations[active].description}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {destinations[active].stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-primary text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="btn btn-primary text-lg px-8">
            Get Free Consultation
          </button>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Top Universities in United Kingdom
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {universities.map((u, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{u.name}</h3>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {u.rank}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <FaMapMarkerAlt className="text-blue-600" />
                <p>{u.location}</p>
              </div>

              <p className="text-gray-700 font-medium mb-2">
                Popular Programs:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {u.programs.map((p, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="btn btn-outline w-full">View Details</button>
                <button className="btn btn-primary w-full">Apply Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl max-w-7xl mx-auto mt-20 p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Apply?</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-6">
            Our expert counselors will help you choose the right university and
            guide you through the entire application process.
          </p>

          <div className="flex justify-center gap-6">
            <button className="btn bg-yellow-400 border-none text-black px-8 text-lg">
              Book Free Consultation
            </button>

            <button className="btn btn-outline text-white border-white px-8 text-lg">
              Download University Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
