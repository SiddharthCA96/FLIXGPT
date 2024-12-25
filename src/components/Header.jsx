import React from 'react';

const Header = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 flex justify-between  w-screen h-20  bg-gradient-to-b from-black">
        {/* Main logo on the left */}
        <img
          className="w-50"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {/* Secondary image on the right */}
        <img
          className="w-10 h-10 ml-auto mr-6 my-auto rounded-full border-2 border-white"
          src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXvDtFo-HM-uWfPvUId_3crt7farmbN51NbaGZfil_-kRLGtiSnYeL_FNI7caMItKf77i55RP0m8Ofb1bQGDuv1qRkQC2Bg.png?r=9fc"
          alt="secondary logo"
        />
        <button className="p-2 my-5 w-20 h-10 mr-4 hover:bg-red-800 bg-red-600 rounded-full border-10 text-white">Sign Out</button>
      </div>
    </>
  );
};

export default Header;
