import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <div className=" py-[1rem] border-b-2 border-[#00000039] px-[0.8rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem]">
      <div className=" flex justify-between px-[1rem] items-center">
        <Link
          className="self-center whiteespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          to={"/"}
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Lite
          </span>
          Blog
        </Link>
        <form action="" className="w-full max-w-[20rem] hidden lg:inline">
          <div className="relative w-full ">
            <div className="absolute p-2 right-0 cursor-pointer">
            <AiOutlineSearch className="text-[1.3rem] font-semibold" />
            </div>
            <input type="text" placeholder="Search..." className="border border-[#00000023] rounded w-full px-[0.8rem] py-[0.4rem] text-[1rem] pr-[2rem]"/>
          </div>
        </form>

        <div className=" flex justify-between gap-[2rem] ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/post"}>Post</NavLink>
        </div>

        <button className="p-[0.8rem]  lg:hidden bg-gray-100 rounded">
          <AiOutlineSearch />
        </button>
        <div className=" gap-2 hidden sm:flex">
          <button className="p-[0.8rem] bg-gray-100 rounded hidden sm:inline">
            <FaMoon />
          </button>
          <Link to={"/signin"}>
            <button className="p-[0.8rem] bg-gray-100 rounded hidden sm:inline">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
