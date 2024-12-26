import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { FLIX_LOGO } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();


  // Handle the sign-out function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // // Sign-out successful, navigate to the login page
        // navigate('/');
      })
      .catch((error) => {
        // An error occurred, navigate to the error page
        navigate('/error');
      });
  };

  //use erffect
  useEffect(()=>{
    //using useeffect hook as i want to this work only once not at every rendering
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const {uid,email,displayName,photoURL} = user;
          //dispatch an action using dispatch(add user to db)
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          //dispatch an action remove user
          dispatch(removeUser());
          navigate("/");
        }
      });
      //unsubscibe when the component unmount
      return ()=>unsubscribe();
},[]);

  return (
    <>
      <div className="fixed top-0 left-0 flex justify-between w-screen h-20 bg-gradient-to-b from-black">
        {/* Main logo on the left */}
        <img
          className="w-50"
          src={FLIX_LOGO}
          alt="logo"
        />
        {/* Secondary image and button on the right */}
        {user && (
          <>
            <img
              className="w-10 h-10 ml-auto mr-6 my-auto rounded-full border-2 border-white"
              // Forcing the browser to fetch the real-time URL
              src={`${user?.photoURL}?t=${new Date().getTime()}`}
              alt="secondary logo"
            />
            <button
              onClick={handleSignOut}
              className="p-2 my-5 w-20 h-10 mr-4 hover:bg-red-800 bg-red-600 rounded-full border-10 text-white"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
