import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 border-t-3.5 border-b-2.5 border-l-3 border-purple-700 rounded-full animate-spin"></div>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formData = { username, email, password };

  const SignHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data) {
        console.log(data);
        toast.success(data);
        setErrorMessage("");
        setPassMessage("Sign In successful")
      }
      if (data.success === false) {
        setErrorMessage(data.message);
        console.log(data.message);
        setLoading(false);
      }

      setLoading(false);

      if (response.ok) {
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 px-[0.8rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem]">
      <div className="flex flex-col md:flex-row p-3 max-w-3xl mx-auto items-center gap-10">
        <div className="w-full md:w-[50%]">
          <Link className=" text-4xl font-semibold dark:text-white" to={"/"}>
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Lite
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iste
            numquam quibusdam id.
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <form onSubmit={SignHandler} className="flex flex-col gap-4">
            {errorMessage === "" ? (
              <div
                className={`w-full py-[1rem] px-[1.5rem] bg-green-200 rounded ${
                  passMessage === "" ? "hidden" : "block"
                }`}
              >
                <p className="text-green-700">{passMessage}</p>
              </div>
            ) : (
              <div className="w-full py-[1rem] px-[1.5rem] bg-red-200 rounded">
                <p className="text-red-700">{errorMessage}</p>
              </div>
            )}
            <div className="">
              <label htmlFor="username">Your Username</label>
              <input
                onChange={(e) => setUsername(e.target.value.trim())}
                value={username}
                type="text"
                placeholder="Username"
                id="username"
                className="border border-[#00000023] rounded w-full p-[0.5rem] "
              />
            </div>
            <div className="">
              <label htmlFor="email">Your Email</label>
              <input
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
                type="email"
                placeholder="your email@mail.com"
                id="email"
                className="border border-[#00000023] rounded w-full p-[0.5rem] "
              />
            </div>
            <div className="">
              <label htmlFor="password">Your Password</label>
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                value={password}
                type="password"
                placeholder="Password"
                id="password"
                className="border border-[#00000023] rounded w-full p-[0.5rem] "
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white p-[0.5rem] rounded"
            >
              {loading ? (
                <div className="flex gap-2 items-center max-w-[8rem] mx-auto">
                  <LoadingSpinner />
                  <span>Signing Up</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
            <OAuth />
          </form>
          <div className=" flex justify-between mt-2 text-sm">
            <p>Already have an account? </p>
            <Link to="/signin" className="underline text-purple-900">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
