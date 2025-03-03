import React from 'react';
import profile from "../images/profile.png";

const Header = () => {
    return (
        <div className="flex justify-between p-5 items-center border-b-2 mx-5">
        <h1 className="text-3xl font-bold">React Cafe</h1>
        <img src={profile} alt="" />
      </div>
    );
};

export default Header;