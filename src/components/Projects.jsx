const projects = [
  {
    title: "TechMate",
    image: "../images/techmate.png",
    link: "http://16.171.17.172/",
    detail:
      "Full-stack app with user authentication, profile management, and connections. Uses Node.js, React.js, MongoDB, and JWT."
  },
  {
    title: "Food Store",
    image: "../images/food.png",
    link: "https://github.com/svsumit98/Food_Store",
    detail:
      "Food ordering app with React.js, Redux, and Swiggy API for live restaurant data."
  },
  {
    title: "Dice Game",
    image: "../images/dice.png",
    link: "https://svsumit98.github.io/Dicee/",
    detail:
      "A simple interactive game using HTML, CSS, and JavaScript where players roll a dice to compete."
  },
  {
    title: "SwiftFAQ",
    image: "../images/faq.png",
    link: "https://github.com/svsumit98/FAQ-Bharat-BD",
    detail:
      "REST API for multilingual FAQs with MongoDB. Features Google Translate API and Redis caching."
  }
];

const Projects = () => {
  return (
    <div className="w-full max-w-full md:max-w-3/4 mx-auto flex-grow flex-col items-center justify-center pt-10">
      {/* Projects Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-white">My Projects</h1>
        <p className="text-gray-300">Here are some of my recent works</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-2/3 lg:w-2/3 mx-auto relative border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Project Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full mx-auto h-48 object-cover transition-transform duration-500 ease-out transform hover:scale-150 "
              />
            </a>

            {/* Project Title */}
            <div className="p-2 bg-gray-[#0a192f] text-center">
              <h3 className="text-lg hover:text-orange-300 font-semibold">
                {project.title}
              </h3>
            </div>
            {/* Project Detail */}
            <div className="p-1 bg-gray-[#0a192f] text-center">
              <p className="text-gray-300">{project.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
