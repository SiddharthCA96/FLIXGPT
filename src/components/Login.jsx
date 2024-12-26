import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { DEF_AVTAAR, LOGIN_BACK } from "../utils/constants";



const Login = () => {
  //state var to change/switch btw the forms
  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]= useState(null);
  const dispatch=useDispatch();
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);


  //handle button
  const handleButton=()=>{
    //validate the data using the function create din valiadate.jsx
    //valiadate takes email and pass as props

    const mssg=validate(email.current.value,password.current.value);
    setErrorMessage(mssg);
    if(mssg)return;

    if(!isSignInform){
        //Sign up user after creating the user with email

        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL:DEF_AVTAAR

            }).then(() => {
              // Profile updated!
              //now get the name and user profile from the updated auth
              const {uid,email,displayName,photoURL}=auth.currentUser;
               dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            }).catch((error) => {
              // An error occurred
            })
          // console.log(user);
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
          src={LOGIN_BACK}
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
