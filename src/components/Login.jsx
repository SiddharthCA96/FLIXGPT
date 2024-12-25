import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    //state var to change/switch btw the forms
  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]= useState(null);
  const navigate=useNavigate()

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  //handle button
  const handleButton=()=>{
    //validate the data using the function create din valiadate.jsx
    //valiadate takes email and pass as props
    // console.log(email.current.value);
    // console.log(password.current.value);
    
    const mssg=validate(email.current.value,password.current.value);
    setErrorMessage(mssg);
    //console.log(mssg);
    if(mssg)return;

    if(!isSignInform){
      //Sign up logic
        //Sign up user after creating the user with email
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
         // console.log(user);
          //navigate the user to browse
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
    else{
    //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage + "-" + errorCode);
      });
    }
  }
  //toggle form function
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
        <form onSubmit={(e)=>e.preventDefault()} className="bg-black/75 p-7  rounded shadow-md w-1/4">
          <h1 className="font-bold text-3xl mb-3 text-white">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 border rounded w-full bg-black/10 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-3 border rounded w-full bg-black/10 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 border rounded w-full bg-black/10 text-white"
          />
          <p className="text-red-500 p-1">{errorMessage}</p>
          <button className="p-3 my-3 bg-red-500 text-white rounded w-full" onClick={handleButton}>
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
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
