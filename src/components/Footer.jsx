import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Service Menu",
      link: "/servicemenu",
    },
    {
      name: "Our Story",
      link: "/ourstory",
    },
  ];
  return (
    <footer className="bg-[#FDE4DB] px-[5%] lg:px-[10%] py-20 pb-5 lg:pb-20 lg:py-14">
      <div className="2xl:container mx-auto grid lg:grid-cols-3">
        <div className=" flex justify-center lg:py-10">
          <div className="grid place-content-center uppercase rounded-full border-[15px] lg:border-[#fccab8] h-[200px] w-[200px] my-auto">
            <p className="text-4xl font-bold">salon</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 lg:gap-2 mt-20 lg:mt-0">
          {links.map((lnk, index) => (
            <Link key={index} to={lnk.link} className="font-semibold">
              {lnk.name}
            </Link>
          ))}
        </div>
        <div className="mt-20 lg:mt-0 text-center flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Follow US</h3>
          <p className="w-2/3 text-center mx-auto mt-3">
            Don’t miss promotions, follow us for the latest news
          </p>
          <div className="flex gap-2 mt-5 justify-center">
            <Link to="https://www.facebook.com/profile.php?id=100087867841231">
              <CgFacebook size={30} />
            </Link>
            <Link to="https://www.instagram.com/johnwritescode?igsh=YzJoczR6ZXliajls">
              <FaInstagram size={30} />
            </Link>
          </div>
        </div>
      </div>

      <div className="smallFont text-sm py-5 text-center mt-10 lg:mt-0">
        <p className="font-bold">Built by Faithful John</p>
        <p className="flex gap-2 justify-center">
          <a href="https://x.com/HitzShyPrince?s=09" className="mt-2 p-4">
            {" "}
            <FaXTwitter />{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
