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
import { MdOutlineDateRange } from "react-icons/md";

export default function StudyDestinations() {
  const [tab, setTab] = useState("students");
  const [activeStudent, setActiveStudent] = useState("UK");
  const [activeTourist, setActiveTourist] = useState("USA");

  // Top Destinations in United States
  const touristLandmarks = {
    USA: [
      {
        name: "New York City",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["Statue of Liberty", "Times Square", "Central Park", "Empire State Building"],
      },
      {
        name: "Los Angeles",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["Hollywood", "Santa Monica Beach", "Universal Studios", "Getty Center"],
      },
      {
        name: "Las Vegas",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["The Strip", "Grand Canyon Tours", "Shows & Entertainment", "Casinos"],
      },
      {
        name: "San Francisco",
        bestSeason: "Best Season: Year-round",
        description: "Top Highlights:",
        place: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf", "Cable Cars"],
      },
      {
        name: "Miami",
        bestSeason: "Best Season: Nov-Apr",
        description: "Top Highlights:",
        place: ["South Beach", "Art Deco District", "Everglades", "Little Havana"],
      },
      {
        name: "Orlando",
        bestSeason: "Best Season: Year-round",
        description: "Top Highlights:",
        place: ["Disney World", "Universal Studios", "SeaWorld", "Kennedy Space Center"],
      },
      {
        name: "Grand Canyon",
        bestSeason: "Best Season: Mar-Oct",
        description: "Top Highlights:",
        place: ["South Rim", "Hiking Trails", "Helicopter Tours", "Sunrise Views"],
      },
      {
        name: "Yellowstone",
        bestSeason: "Best Season: May-Sep",
        description: "Top Highlights:",
        place: ["Old Faithful", "Wildlife Viewing", "Hot Springs", "Hiking"],
      },
    ],
    Canada: [
      {
        name: "Banff & Jasper",
        bestSeason: "Best Season: Jun-Sep",
        description:
          "Top Highlights:",
        place: ["Lake Louise", "Rocky Mountains", "Hot Springs", "Wildlife Tours"],
      },
      {
        name: "Toronto",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["CN Tower", "Niagara Falls", "Royal Ontario Museum", "Distillery District"],
      },
      {
        name: "Vancouver",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Stanley Park", "Capilano Bridge", "Granville Island", "Grouse Mountain"],
      },
      {
        name: "Montreal",
        bestSeason: "Best Season:  May-Oct",
        description:
          "Top Highlights:",
        place: ["Old Montreal", "Notre-Dame Basilica", "Mount Royal", "Festivals"],
      },
      {
        name: "Quebec City",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Old Quebec", "Château Frontenac", "Montmorency Falls", "Winter Carnival"],
      },
      {
        name: "Victoria",
        bestSeason: "Best Season:  Apr-Oct",
        description:
          "Top Highlights:",
        place: ["Butchart Gardens", "Inner Harbour", "Whale Watching", "Parliament Buildings"],
      },
      {
        name: "Whistler",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Skiing & Snowboarding", "Peak 2 Peak Gondola", "Mountain Biking", "Village"],
      },
      {
        name: "Ottawa",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Parliament Hill", "Rideau Canal", "Museums", "Tulip Festival"],
      },
      
      
    ],
  };

  const currentTouristLandmarks = touristLandmarks[activeTourist] || [];

  const costData = {
    USA: {
      currency: "$",
      items: [
        {
          title: "Accommodation",
          price: "USD 500-1,500/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "USD 250-400/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "USD 50-150/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "USD 100-200/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "USD 100-200/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "USD 1,000-2,450/month",
    },
    UK: {
      currency: "£",
      items: [
        {
          title: "Accommodation",
          price: "£400-800/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "£150-250/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "£50-100/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "£40-80/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "£50-100/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "£690-1,330/month",
    },
    Canada: {
      currency: "CAD$",
      items: [
        {
          title: "Accommodation",
          price: "CAD 400-800/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "CAD 200-400/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "CAD 80-120/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "CAD 50-100/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "CAD 100-150/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "CAD 830-1,570/month",
    },
    Australia: {
      currency: "A$",
      items: [
        {
          title: "Accommodation",
          price: "AUD 500-1,000/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "AUD 300-500/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "AUD 100-150/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "AUD 80-150/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "AUD 100-200/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "AUD 1,080-2,000/month",
    },
    Sweden: {
      currency: "SEK",
      items: [
        {
          title: "Accommodation",
          price: "SEK 3,000-6,000/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "SEK 2000-3000/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "SEK 600-800/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "SEK 300-500/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "SEK 500-1,000/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "SEK 6,400-11,300/month",
    },
  };

  const countriesData = {
    USA: [
      {
        title: "Accommodation",
        desc: "Variety of housing options from dorms to apartments, with modern facilities and amenities.",
        icon: <FaHome className="text-2xl [#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Campus shuttles, public transit in cities, and car-friendly infrastructure.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Comprehensive student health insurance, quality medical facilities on and off campus.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Wide variety of stores, restaurants, and international food options at all price points.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "Campus security services, safe neighborhoods, and emergency support systems.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Diverse cultural experiences, entertainment options, and vibrant student life.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    UK: [
      {
        title: "Accommodation",
        desc: "Modern student housing with excellent facilities, both on-campus and off-campus options available",
        icon: <FaHome className="text-2xl [#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Comprehensive public transport network including buses, trains, and underground systems",
        icon: <FaBus className="text-2xl [#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Free NHS healthcare for international students, world-class medical facilities",
        icon: <FaHospital className="text-2xl [#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Diverse shopping centers, international cuisine, and vibrant food culture.",
        icon: <FaShoppingCart className="text-2xl [#002060]" />,
      },
      {
        title: "Safety",
        desc: "Safe and secure environment with low crime rates and student support services.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Rich cultural heritage, museums, theaters, and diverse international communities.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    Canada: [
      {
        title: "Accommodation",
        desc: "Comfortable student residences and apartments with modern amenities and heating systems.",
        icon: <FaHome className="text-2xl text-[#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Efficient public transit systems, bike-friendly cities, and student discounts available.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Provincial health insurance coverage, quality medical facilities and student health services.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Affordable grocery stores, diverse restaurants, and international food markets.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "One of the safest countries globally with friendly communities and low crime rates.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Bilingual environment, multicultural festivals, and welcoming immigrant communities.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    Australia: [
      {
        title: "Accommodation",
        desc: "Modern student housing, shared apartments, and homestay options with good facilities.",
        icon: <FaHome className="text-2xl text-[#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Reliable public transport, student concession cards, and bike-friendly infrastructure.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Overseas Student Health Cover (OSHC), quality medical services and facilities.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Diverse shopping options, multicultural food scene, and fresh local produce.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "Safe and welcoming environment with strong student support and protection laws.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Laid-back lifestyle, outdoor activities, and vibrant multicultural communities.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    Sweden: [
      {
        title: "Accommodation",
        desc: "Well-insulated student housing, modern facilities with excellent heating and amenities.",
        icon: <FaHome className="text-2xl text-[#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Excellent public transport, bike-friendly cities, and student travel discounts.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Universal healthcare system, subsidized medical care for students and residents.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Quality grocery stores, Swedish and international cuisine, sustainable food options.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "Extremely safe country with low crime rates and strong social support systems.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Progressive society, English-speaking environment, and rich cultural traditions.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
  };

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
      description:
        "Sweden offers innovation-driven education and top-tier opportunities.",
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
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
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
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="bg-blue-600 text-white text-center py-16 px-4 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Study Destinations
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg opacity-90">
          Explore world-class education opportunities in top destinations.
        </p>
      </div>

      {/* MAIN TABS */}
      <div className="py-5 text-center">
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              tab === "students"
                ? "bg-[#002060] text-white"
                : "bg-white border-2 border-[#002060] text-[#002060]"
            }`}
            onClick={() => setTab("students")}
          >
            <FaUserGraduate className="inline mr-2" /> For Students
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              tab === "tourists"
                ? "bg-[#002060] text-white"
                : "bg-white border-2 border-[#002060] text-[#002060]"
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
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    activeTourist === c
                      ? "bg-[#002060] text-white border-[#002060] shadow"
                      : "border border-[#002060] text-[#002060]"
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
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                  {touristData[activeTourist].title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {touristData[activeTourist].description}
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {touristData[activeTourist].stats.map((s, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center"
                    >
                      <h2 className="text-xl font-bold text-[#002060]">
                        {s.value}
                      </h2>
                      <p className="text-gray-600 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
                <button className="px-6 py-3 border-2 bg-[#002060] text-white hover:bg-white hover:text-[#002060] font-semibold rounded-md shadow-md transition duration-300 w-full md:w-auto">
                  Plan Your Trip
                </button>
              </div>
            </div>

            {/* Destinations */}
            <div className="mb-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#002060] mb-10">
    Top Universities in {activeTourist}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {currentTouristLandmarks.map((d, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all rounded-xl p-5 flex flex-col"
      >
        <h3 className="text-xl font-bold mb-2 text-gray-800">{d.name}</h3>
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <MdOutlineDateRange className="text-[#002060]" />
          <p className="text-sm">{d.bestSeason}</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {d.description}
        </p>

        {/* Programs/Faculties */}
        <div className="flex flex-wrap gap-2 mt-4">
          {d.place.map((p, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs sm:text-sm"
            >
              {p}
            </span>
          ))}
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
                  className={`px-4 py-2 rounded-lg font-semibold transition-colorsl ${
                    activeStudent === c
                      ? "bg-[#002060] text-white shadow"
                      : "border border-[#002060] text-[#002060]"
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
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  {destinations[activeStudent].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {destinations[activeStudent].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {destinations[activeStudent].stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-blue-50 rounded-xl py-5 text-center border border-blue-100"
                    >
                      <div className="flex justify-center text-[#002060] text-3xl mb-2">
                        {stat.icon}
                      </div>
                      <p className="text-xl font-bold text-[#002060]">
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <button className="px-6 py-3 bg-[#002060] text-white rounded-lg font-semibold shadow-md hover:bg-[#002060] w-full md:w-auto">
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4">
                Overview of {activeStudent}
              </h3>
              <div className="bg-gray-50 p-6 rounded-xl shadow">
                {destinations[activeStudent].overview}
              </div>
            </div>

            {/* Living Standards */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">
                {activeStudent} — Student Living Overview
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {countriesData[activeStudent].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
                  >
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Living Cost Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                Approximate Living Cost
              </h3>
              <div className="max-w-3xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8">
                {costData[activeStudent].items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 mb-3 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <span>{item.icon}</span>
                      <p className="font-semibold text-gray-800">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-[#002060] font-semibold">{item.price}</p>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row justify-between text-lg font-bold text-[#002060]">
                  <span>Total Estimated Cost</span>
                  <span>{costData[activeStudent].total}</span>
                </div>

                <p className="text-xs text-red-600 mt-4 text-center">
                  * Costs may vary based on lifestyle, city, and personal
                  preferences.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="w-full flex justify-center px-4 mb-10">
        <div className="bg-[#002366] text-white text-center py-12 px-4 sm:px-6 rounded-2xl max-w-6xl w-full shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            Take the first step towards your international education dreams. Our
            expert counselors are here to guide you every step of the way.
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
