import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-x1 font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className="W-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
    <div className="flex items-center w-full gap-3">
    <div className="w-10 h-10">
            <img
              src="https://e7.pngegg.com/pngimages/919/445/png-clipart-bookmyshow-office-android-ticket-android-text-logo-thumbnail.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search from movies, events, plays, sports and activities"
        />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://e7.pngegg.com/pngimages/919/445/png-clipart-bookmyshow-office-android-ticket-android-text-logo-thumbnail.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search from movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Delhi NCR
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

//main component
const Navbar = () => {
  return (
  <nav className="bg-darkBackground-700 px-4 py-3">
   {/*mobile screen navbar*/}
    <div className="md:hidden">
      <NavSm />
    </div>

    {/*medium/tab screen navbar*/}
    <div className="hidden md:flex lg:hidden">
      <NavMd />
    </div>

    {/* large screen navbar*/}
    <div className="hidden md:hidden lg:flex">
      <NavLg />
    </div>
  </nav>);
};

export default Navbar;
