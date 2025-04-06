import React from "react";
import { BsGoogle } from "react-icons/bs";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


const OAuth = () => {

    const dispatch = useDispatch()
    const auth = getAuth(app);
    const navigate = useNavigate()

    const handleGoogleClick = async() => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: "select_account"});
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const response = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhoto: resultsFromGoogle.user.photoURL
                })
            })
            const data = await response.json()
            if(response.ok) {
                dispatch(signInSuccess(data))
                navigate("/")
                console.log(data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
      <button onClick={handleGoogleClick} className="flex gap-2 items-center max-w-[12rem] mx-auto bg-black text-white rounded">
        <BsGoogle />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};

export default OAuth;
