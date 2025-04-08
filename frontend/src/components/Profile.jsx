import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [imagefile, setimageFile] = useState(null)
  const handleImageChange = (e) => {

  }

  return (
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[83%] sm:float-right px-[0.7rem] sm:px-[1rem]">
      <div className="max-w-lg mx-auto">
        <form className="flex flex-col gap-2">
          <h1 className="text-center">Profile</h1>
          <div className="w-32 h-32 self-center ">
            <label htmlFor="file" className="relative">
              <img
                className="rounded-full w-full h-full object-cover border-8 border-gray-700"
                src={currentUser.profilePicture}
                alt="Image"
              />
              <div className="absolute right-0 bottom-[0.5rem]">
                <CiEdit className="text-white bg-gray-700 p-[0.3rem] cursor-pointer text-[1.8rem] font-bold rounded-full"/>
              </div>
            </label>
            <input type="file" name="" id="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className=" flex flex-col gap-3 mt-4">
            <input
              className="border-none bg-gray-100 p-[0.5rem] rounded"
              type="text"
              placeholder="UserName"
              id="username"
              defaultValue={currentUser.username}
            />
            <input
              className="border-none bg-gray-100 p-[0.5rem] rounded"
              type="email"
              placeholder="Email"
              id="email"
              defaultValue={currentUser.email}
            />
            <input
              className="border-none bg-gray-100 p-[0.5rem] rounded"
              type="password"
              placeholder="Chang your password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="border-none bg-[#000] p-[0.5rem] rounded text-[#fff]"
          >
            {" "}
            Edit Profile
          </button>
        </form>
        <div className=" flex justify-between mt-3">
          <span className="text-[green]">Edit</span>
          <span className="text-[red]">Delete</span>
        </div>
      </div>
    </div>
  );
};

//

export default Profile;
