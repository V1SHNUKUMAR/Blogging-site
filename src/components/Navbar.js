import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/myContext";

const Navbar = () => {
  const context = useContext(MyContext);
  const { isLoggedIn, toggleLogin } = context;

  const logoUrl = "https://www.meesho.io/img/meesho-logo.png";

  const handleLogout = () => {
    if (isLoggedIn) {
      toggleLogin();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="content w-full max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between lg:px-12 lg:py-3">
        <Link to={"/"}>
          <div className="logo max-w-[50px] lg:max-w-[70px] aspect-square">
            <img
              className="h-full w-full object-cover object-center"
              src={logoUrl}
              alt="logo"
            />
          </div>
        </Link>
        <nav className="navMenu flex items-center gap-4 lg:gap-12">
          <ul className="items-center gap-14 font-medium hidden lg:flex">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Tech at Meesho</li>
            <li className="cursor-pointer">Life at Meesho</li>
            <li className="cursor-pointer text-teal-400">Blog</li>
            <li className="cursor-pointer">News</li>
          </ul>
          <Link to={"/login"}>
            <button
              onClick={handleLogout}
              className="px-6 py-1.5 bg-amber-500 rounded-full text-black text-lg uppercase duration-300 hover:bg-teal-500 tracking-widest"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </Link>
          <button className="p-2 text-3xl lg:hidden">
            <i className="ri-menu-line"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
