import React from "react";
import { BsGoogle } from "react-icons/bs";

const OAuth = () => {
    const handleGoogleClick = () => {}
  return (
    <div>
      <button onClick={handleGoogleClick()} className="flex gap-2 items-center max-w-[12rem] mx-auto bg-black text-white rounded">
        <BsGoogle />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};

export default OAuth;
