import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-8 border rounded border-purple-800 px-[0.8rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] z-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex border-b-3 w-full justify-between flex-col md:flex-row">
          <div className="mt-5">
            <Link
              className=" self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              to={"/"}
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Lite
              </span>
              Blog
            </Link>
          </div>
          <div className="flex flex-wrap justify-between gap-8 mt-4 md:gap-6 mb-5">
            <div className="flex flex-col gap-3">
              <h1 className="font-medium">ABOUT</h1>
              <Link to={"/"} target="_blank">
                Lite Blog
              </Link>
              <Link to={"/"} target="_blank">
                Lite Blog2
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-medium">FOLLOW US</h1>
              <Link to={"/"} target="_blank">
                Github
              </Link>
              <Link to={"/"} target="_blank">
                Discord
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-medium">LLEGAL</h1>
              <Link to={"/"} target="_blank">
                Github
              </Link>
              <Link to={"/"} target="_blank">
                Discord
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-5">
            <p className="text-center sm:text-left">lite blog © {new Date().getFullYear()}  <span className="underline text-purple-800">Litecod</span>.</p>
            <div className=" flex gap-5 mx-auto max-w-[9rem] sm:mx-0">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTiktok />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
