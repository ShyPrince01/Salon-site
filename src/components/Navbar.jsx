import { useState, useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

// Receive props from App.jsx
const Navbar = ({ cartCount, onCartClick }) => { 
  const links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/aboutus" },
    { name: "Our Catalog", link: "/catalog" },
    { name: "Contact us", link: "/contactus" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/catalog" || location.pathname === "/aboutus";

  const navRef = useRef(null); 

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
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
    return () => { document.removeEventListener("mousedown", handleOutsideClick); };
  }, [navOpen]);

  return (
    // FIX: Added z-50 here to keep the entire navbar stack above page content
    <nav className="px-[5%] lg:px-[10%] absolute text-white w-full left-0 text-sm z-50">
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
            to="/"
            className={`${
              isHomePage ? "text-white" : "text-black"
            } p-2 font-sans text-2xl font-light tracking-[0.15em]`}
          >
            LUJO
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
            <button
              onClick={() => {
                setNavOpen(false);
                onCartClick();
              }}
              
              className="bg-[#d8b4a7] p-3 px-6 w-full lg:w-auto rounded text-black font-semibold flex justify-center items-center gap-2 whitespace-nowrap"
            >
               Cart {cartCount > 0 && `(${cartCount})`}
            </button>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setNavOpen(!navOpen);
          }}
          // FIX: Added relative z-[60] and conditional text-black when navOpen is true so the "X" stays visible over the white menu drawer
          className={`${
            navOpen ? "text-black" : isHomePage ? "text-white" : "text-black"
          } block lg:hidden cursor-pointer relative z-[60]`}
        >
          {navOpen ? <BiX size={45} /> : <FaBars size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;