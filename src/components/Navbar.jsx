import React, { useContext } from "react";
import Add from "../image/man.jpeg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  //calling the currnt user
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="username">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
