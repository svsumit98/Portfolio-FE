import img from "../assets/img.jpg";
const Navbar = () => {
  return (
    <div className="navbar bg-gray-950 shadow-sm">
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
              <a className="underline hover:text-blue-300 font-mono text-lg">
                Projects
              </a>
            </li>
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
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="cursor-pointer hover:text-blue-300 font-semibold mx-2 font-mono text-lg subpixel-antialiased">
          Projects
        </div>
        <a
          href="https://drive.google.com/file/d/1cmnQMvca6c-bhnxO7_Be0k0zrCdJf09d/view?usp=sharing"
          className="cursor-pointer hover:text-blue-300 font-semibold mx-2 font-mono text-lg subpixel-antialiased"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <div className="cursor-pointer hover:text-blue-300 font-semibold mx-2 font-mono text-lg subpixel-antialiased">
          Contact
        </div>
      </div>
      <div className="navbar-end">
        <div>
          {" "}
          <h1 className=" font-mono text-xl">Sumit_Verma</h1>{" "}
        </div>
        <img
          src={img}
          alt="Tailwind CSS Navbar component"
          className="w-10 rounded-full ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
