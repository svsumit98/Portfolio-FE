const Contact = () => {
  return (
    <div className="bg-[#1f1f1f] text-white flex-grow flex-col items-center justify-center px-6 py-16">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <p className="text-gray-400 text-center mt-2">
        Below are the details to reach out to me!
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12">
        {/* Address */}
        <div className="flex flex-col items-center mt-4">
          <div className="bg-gray-800 p-5 rounded-full">
            <span className="text-pink-500 text-3xl">📍</span>
          </div>
          <h3 className="mt-2 font-semibold">ADDRESS</h3>
          <p className="text-gray-400">Prayagraj, India</p>
        </div>

        {/* Contact Number */}
        <div className="flex flex-col items-center mt-4">
          <div className="bg-gray-800 p-5 rounded-full">
            <span className="text-red-500 text-3xl">📞</span>
          </div>
          <h3 className="mt-2 font-semibold">CONTACT NUMBER</h3>
          <p className="text-gray-400">+91 9810651537</p>
        </div>

        {/* Email Address */}
        <div className="flex flex-col items-center mt-4">
          <div className="bg-gray-800 p-5 rounded-full">
            <span className="text-gray-300 text-3xl">✉️</span>
          </div>
          <h3 className="mt-2 font-semibold">EMAIL ADDRESS</h3>
          <p className="text-gray-400">svsumit9810@gmail.com</p>
        </div>

        {/* Download Resume */}
        <div className="flex flex-col items-center mt-4">
          <div className="bg-gray-800 p-5 rounded-full">
            <span className="text-blue-500 text-3xl">🌐</span>
          </div>
          <h3 className="mt-2 font-semibold">DOWNLOAD RESUME</h3>
          <a
            href="https://drive.google.com/uc?export=download&id=1bqVhW1A2AaQxScCup0MusXIduIDIADtK
"
            download
            className="text-yellow-500 hover:text-yellow-400 transition"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-6 flex flex-col items-center">
        <p className="text-xl text-center">Have a Question?</p>
        <a
          href="mailto:svsumit98@gmail.com"
          className="bg-yellow-500 text-black px-6 py-3 mt-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

export default Contact;
