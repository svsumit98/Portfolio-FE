const AboutMe = () => {
  return (
    <div className="bg-neutral text-neutral-content min-h-screen p-8">
      <div className="container mx-auto max-w-4xl bg-base-200 p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          A results-oriented Machine Learning and Software Development
          professional with over two years of industry experience, specializing
          in system architecture, performance optimization, and problem-solving.
          With a strong academic background and hands-on experience in complex
          trading systems, I have developed expertise in technologies such as{" "}
          <strong>C++, Python, and Shell scripting.</strong>
          I've contributed to innovative projects like object detection using
          Faster RCNN and speech emotion recognition. Passionate about
          leveraging my skills to develop cutting-edge solutions.
        </p>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Profile:</h3>
            <p>Machine Learning & Software Developer</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Education:</h3>
            <p>Master of Technology (2023 - 2025)</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Languages:</h3>
            <p>English, Hindi, Marathi</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Tools:</h3>
            <p>
              C, C++, Python, Shell Scripting, Numpy, Pandas, Jenkins, OpenCV
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Subjects:</h3>
            <p>
              Machine Learning, Data Structures & Algorithms, OOP, OS & System
              Design
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Interests:</h3>
            <p>Writing Code, Playing Games, Reading Books</p>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="mt-6 text-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-warning text-lg px-6">LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
