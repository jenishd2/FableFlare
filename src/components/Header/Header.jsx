import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import authServices from "../../appwrite/auth";
import { useSelector } from "react-redux";
import { Logout, Button } from "../index";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="justify-between px-10 border-b-2 border-black items-center h-[60px] w-[100%] mx-auto flex">
      <div className="h-full w-1/4 flex justify-start items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">FableFlare</h1>
        </Link>
      </div>
      <div className="flex text-xl gap-5">
        {navItem.map((item) =>
          item.active ? (
            <li
              key={item.name}
              className="list-none"
              onClick={() => navigate(item.slug)}
            >
              <Button
                classname="border-2 border-black  text-xl font-semibold px-2 py-1 rounded hover:shadow-3xl transition hover:ease-in-out duration-300"
                children={item.name}
              />
            </li>
          ) : null
        )}
        {authStatus && (
          <>
            <li className="list-none">
              <Logout />
            </li>
          </>
        )}
      </div>
    </header>
  );
}
