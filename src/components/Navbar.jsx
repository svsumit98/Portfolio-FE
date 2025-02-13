import { Link } from "react-router-dom";
import img from "../assets/img.jpg";
const Navbar = () => {
  return (
    <div className="navbar bg-gray-950 shadow-sm px-4">
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
              <a
                className="underline hover:text-blue-300 font-mono text-lg"
                href="https://drive.google.com/file/d/1cmnQMvca6c-bhnxO7_Be0k0zrCdJf09d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a className="underline hover:text-blue-300 font-mono text-lg">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="hover:text-orange-300 font-semibold mx-4 font-mono text-xl"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-orange-300 font-semibold mx-4 font-mono text-xl"
        >
          About
        </Link>
        <Link
          to="/project"
          className="hover:text-orange-300 font-semibold mx-4 font-mono text-xl"
        >
          Projects
        </Link>
        <Link
          to="https://drive.google.com/file/d/1cmnQMvca6c-bhnxO7_Be0k0zrCdJf09d/view?usp=sharing"
          className="hover:text-orange-300 font-semibold mx-4 font-mono text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="hover:text-orange-300 font-semibold mx-4 font-mono text-xl"
        >
          Contact
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden md:block">
          <h1 className=" font-mono text-xl">Sumit Verma</h1>
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
