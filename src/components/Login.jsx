import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="Backimg"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="bg-black/15 absolute inset-0 flex items-center justify-center">
        <form className="bg-black/75 p-7  rounded shadow-md w-1/4">
          <h1 className="font-bold text-3xl mb-3 text-white">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 border rounded w-full bg-black/10"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 my-3 border rounded w-full bg-black/10"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 border rounded w-full bg-black/10"
          />
          <button className="p-3 my-3 bg-red-500 text-white rounded w-full">
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white w-full text-center mt-4">OR</p>
          <p className="text-gray-300 w-full text-center mt-4">
            <span className="text-gray-400">
              {isSignInform ? "New to Flixgpt?  " : "Already a User? "}
            </span>
            <span
              className="text-white-500 underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInform ? " Sign Up" : " Sign In"}
            </span>
            .
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
