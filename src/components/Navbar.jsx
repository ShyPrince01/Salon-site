import{ useState, useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Book Online", link: "/bookappointment" },
    { name: "Service Menu", link: "/servicemenu" },
    { name: "Our Story", link: "/ourstory" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navRef = useRef(null); // Reference to navbar container

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when navbar is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);

  return (
    <nav className="px-[5%] lg:px-[10%] absolute text-white w-full left-0 text-sm">
      {navOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md transition-all duration-300"></div>
      )}

      <div
        className={`${
          isHomePage ? "border-white" : "border-black"
        } 2xl:container mx-auto flex justify-between items-center border-b-4 py-5 relative z-10`}
      >
        <div>
          <Link
            className={`${
              isHomePage ? "text-white" : "text-black"
            } p-2 font-sans text-xl font-semibold`}
          >
            Salon
          </Link>
        </div>

        <div
          ref={navRef}
          className={`nav-container ${
            navOpen ? "left-0" : "-left-[100%] lg:left-0"
          } h-screen z-50 fixed text-black w-2/3 lg:relative top-0 lg:h-fit flex flex-col justify-center lg:justify-start lg:flex-row items-center gap-10 lg:gap-5 bg-white lg:bg-transparent transition-all duration-300`}
        >
          {links.map((lnk, index) => (
            <NavLink
              key={index}
              to={lnk.link}
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? isHomePage
                    ? "text-[#fccab8] px-2 py-1"
                    : "text-black px-2 py-1"
                  : isHomePage
                  ? "text-black lg:text-white px-2 py-1"
                  : "text-gray-500 px-2 py-1"
              }
            >
              {lnk.name}
            </NavLink>
          ))}

          <div className="lg:ms-auto mt-10 lg:mt-0">
            <Link
              to="/contactus"
              className="bg-[#fccab8] p-3 rounded text-black font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setNavOpen(!navOpen);
          }}
          className={`${
            isHomePage ? "text-white" : "text-black"
          } block lg:hidden cursor-pointer`}
        >
          {navOpen ? <BiX size={45} /> : <FaBars size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
