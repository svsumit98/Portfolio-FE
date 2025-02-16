import { Link } from "react-router-dom";
import img from "../assets/img.jpg";
const Navbar = () => {
  return (
    <div className="navbar bg-neutral shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className="hover:text-orange-300 text-normal  text-gray-300 font-medium mx-4 font-sans"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-300 text-normal text-gray-300 font-medium mx-4 font-sans"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hover:text-orange-300 text-normal text-gray-300 mx-4 font-medium font-sans text-normal"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="https://drive.google.com/file/d/1bqVhW1A2AaQxScCup0MusXIduIDIADtK/view?usp=sharing"
                className="hover:text-orange-300 text-normal text-gray-300 mx-4 font-medium font-sans text-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-300 text-normal text-gray-300 mx-4 font-medium font-sans text-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" hidden md:block navbar-center">
        <Link
          to="/"
          className="hover:text-orange-300 text-gray-300 font-normal mx-4 font-mono"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-orange-300 text-gray-300 font-normal mx-4 font-mono"
        >
          About
        </Link>
        <Link
          to="/project"
          className="hover:text-orange-300 text-gray-300 mx-4 font-mono text-normal"
        >
          Projects
        </Link>
        <Link
          to="https://drive.google.com/file/d/1bqVhW1A2AaQxScCup0MusXIduIDIADtK/view?usp=sharing"
          className="hover:text-orange-300 text-gray-300 mx-4 font-mono text-normal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="hover:text-orange-300 text-gray-300 mx-4 font-mono text-normal"
        >
          Contact
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden md:block">
          <h1 className=" font-mono text-gray-300 text-lg">Sumit Verma</h1>
        </div>
        <img
          src={img}
          alt="Tailwind CSS Navbar component"
          className="hidden md:block w-10 rounded-full ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
