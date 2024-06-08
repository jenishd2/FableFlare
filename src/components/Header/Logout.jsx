import React from "react";
import authServices from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

export default function Logout() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authServices.Logout().then(() => {
      dispatch(logout())
    });
  };
  return <button onClick={logoutHandler} className="border-2 border-black  text-xl font-semibold px-2 py-1 rounded hover:shadow-3xl transition hover:ease-in-out duration-300 ">Logout</button>;
}
