import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { FLIX_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showgpt=useSelector((store)=>store.gpt.gptsearch);
  // Handle the sign-out function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  //handle the GPTSearch button
  const handleGPTSearch=()=>{
    //toggle to gpt search

    //dispatch the action to togglegptsearch
    dispatch(toggleGptSearch());
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="fixed top-0 left-0 flex justify-between w-full bg-gradient-to-b from-black z-20">
      {/* Main logo */}
      <img className="w-[150px] h-auto ml-4" src={FLIX_LOGO} alt="Flix Logo" />

      {/* User Info */}
      {user && (
        <div className="flex items-center">
          <button 
            onClick={handleGPTSearch}
            className="p-2 text-white-300 mr-4 rounded-md bg-purple-500 hover:bg-purple-700">
            {showgpt ? "Browse" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-800 mr-4">
            Sign Out
          </button>
          <img
            className="w-10 h-10 rounded-full border-2 border-white mr-4"
            src={`${user?.photoURL}?t=${new Date().getTime()}`}
            alt="User Profile"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
