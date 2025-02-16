const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-[#1f1f1f] text-white p-8 rounded-lg">
        <h1 className="text-4xl font-semibold text-orange-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-justify leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-gray-100">Sumit Kumar Verma</span>
          , an aspiring Software Developer with experience in building scalable
          web applications and Application Programming Interface (API)
          development. With a strong problem-solving mindset, I enjoy creating
          secure, efficient, and intuitive systems that enhance user experience.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-orange-400">Education</h2>
          <div className="mt-4 space-y-4">
            <div className="bg-neutral p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white">
                Master of Technology (M.Tech)
              </h3>
              <p className="text-gray-300">
                Indian Institute of Information Technology, Allahabad (2023 -
                2025)
              </p>
              <p className="text-gray-400">CGPA: 8.27</p>
            </div>

            <div className="bg-neutral p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-gray-300">
                Galgotias College of Engineering and Technology, Noida (2016 -
                2020)
              </p>
              <p className="text-gray-400">CGPA: 8.17</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-orange-400">Experience</h2>
          <div className="mt-4 space-y-4">
            <div className="bg-neutral p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white">
                Teaching Assistant
              </h3>
              <p className="text-gray-300">IIIT Allahabad (2023 - Present)</p>
              <ul className="list-disc ml-5 text-gray-400">
                <li>
                  Assisted in Data Structures, Algorithms, and OOP in C++.
                </li>
                <li>Mentored students in coding problem-solving techniques.</li>
              </ul>
            </div>

            <div className="bg-neutral p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white">
                Freelance Subject Matter Expert
              </h3>
              <p className="text-gray-300">Chegg India (2021 - 2023)</p>
              <ul className="list-disc ml-5 text-gray-400">
                <li>
                  Provided in-depth solutions for Data Structures, Algorithms
                  and Operating Systems queries.
                </li>
                <li>
                  Debugg and optimize code with efficient problem-solving
                  approaches.
                </li>
                <li>Developed scalable solutions using C, C++, and Python.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
