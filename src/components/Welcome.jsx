const Welcome = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-[#1f1f1f] text-white px-6 py-12">
        <div className="max-w-4xl text-center">
          <p className="text-4xl text-orange-400 font-mono">Hi, my name is</p>
          <h1 className="text-8xl font-semibold text-gray-200 mt-2">
            Sumit Verma.
          </h1>
          <h2 className="text-4xl font-semibold text-gray-400 mt-2">
            I build scalable web applications.
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            I am a results-driven Software Developer with a passion for building
            scalable applications, optimizing performance, and solving complex
            problems. I have strong technical expertise in C++, JavaScript,
            Node.js, React.js, Express.js, and MongoDB, with a deep
            understanding of data structures and algorithms.I am passionate
            about designing robust architectures and developing high-performance
            solutions that enhance user experience and system reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
