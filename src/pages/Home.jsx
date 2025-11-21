import React from 'react';
import Banner from '../Components/Banner';
import { FaUniversity, FaPassport, FaFileAlt, FaUserTie } from "react-icons/fa";
import Marquee from "react-fast-marquee";


const Home = () => {


    const destinations = [
  {
    name: "United Kingdom",
    universities: "140+",
    programs: "1000+",
    button: "Explore Programs",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Great_Court%2C_Trinity_College%2C_Cambridge_-_geograph.org.uk_-_765813.jpg"
  },
  {
    name: "Canada",
    universities: "100+",
    programs: "400+",
    button: "Explore Programs",
    img: "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/university_of_toronto_1_1.jpg?itok=9fNp3VSb"
  },
  {
    name: "United States",
    universities: "200+",
    programs: "600+",
    button: "Explore Programs",
    img: "https://www.smc.edu/student-support/academic-support/transfer-center/articulation-agreements/private-california-universities/images/United-States-University.jpg"
  },
  {
    name: "Sweden",
    universities: "40+",
    programs: "300+",
    button: "Explore Programs",
    img: "https://cms.studyinsweden.se//app/uploads/2013/10/KTH-Borgg%C3%A5rden_Jann-Lipka-870x579-1.jpg"
  },
  {
    name: "Australia",
    universities: "80+",
    programs: "900+",
    button: "Explore Programs",
    img: "https://student-cms.prd.timeshighereducation.com/sites/default/files/sydney_0.jpg"
  }
];


    return (
        <div>
            <Banner></Banner>

            <section className="w-full bg-base-100 py-16 px-6">
      
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        
        <div>
          <h2 className="text-3xl font-bold text-primary">2000+</h2>
          <p className="text-sm text-gray-600">Students Placed</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary">95%</h2>
          <p className="text-sm text-gray-600">Visa Success Rate</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary">50+</h2>
          <p className="text-sm text-gray-600">Partner Universities</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary">8+</h2>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
      </div>
      </section>


        {/* Why Choose NSEC Global */}
    <div className='bg-gray-100 w-full py-20'>
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Why Choose NSEC Global?</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We provide comprehensive support throughout your international education
          journey, from university selection to visa approval and beyond.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-10 md:px-20 w-full">
        
        <div className="card bg-base-100 shadow-md p-6 text-center">
          <FaUniversity className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">University Selection</h3>
          <p className="text-gray-600 text-sm">
            Expert guidance to choose the perfect university that matches your academic goals.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center">
          <FaPassport className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Visa Assistance</h3>
          <p className="text-gray-600 text-sm">
            Complete visa application support with expert guidance throughout the process.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center">
          <FaFileAlt className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Documentation</h3>
          <p className="text-gray-600 text-sm">
            Professional assistance with all required documents, ensuring accuracy and compliance.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center">
          <FaUserTie className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Career Planning</h3>
          <p className="text-gray-600 text-sm">
            Strategic career guidance to help you make informed decisions for your future.
          </p>
        </div>

      </div>
      </div>


        {/* Why Choose NSEC Global? */}
      <div>
    <section className="py-16 px-6 bg-base-100">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Popular Study Destinations
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore world-class education opportunities in top destinations with our expert guidance and support.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md  hover:shadow-xl transition-all"
          >
            <figure>
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="text-lg font-bold">{item.name}</h2>

              <div className=" text-sm text-gray-600 flex gap-3">
                <p><span>{item.universities}</span><span>Universities</span></p>
                <p><span>{item.programs}</span><span>Programs</span></p>
              </div>

              <div className="card-actions mt-4">
                <button className="btn btn-outline btn-primary w-full">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="text-center mt-10">
        <button className="btn btn-primary px-8">
          View All Destinations
        </button>
      </div>
    </section>
      </div>

            
        </div>
    );
};

export default Home;