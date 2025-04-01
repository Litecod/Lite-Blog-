import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  TextInput,
} from "flowbite-react";
import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <div className=" py-[1rem] border-b-2">
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
        <form action="">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>

        <div className=" flex justify-between gap-[2rem] ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/post"}>Post</NavLink>
        </div>

        <button className="p-[0.8rem] lg:hidden bg-gray-100 rounded">
          <AiOutlineSearch />
        </button>
        <div className="flex gap-2">
          <button className="p-[0.8rem] lg:hidden bg-gray-100 rounded hidden sm:inline">
            <FaMoon />
          </button>
          <Link to={"/signin"}>
            <button className="p-[0.8rem] lg:hidden bg-gray-100 rounded hidden sm:inline">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
