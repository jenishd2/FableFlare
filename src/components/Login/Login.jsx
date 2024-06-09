import React from "react";
import { Input ,Button} from "../index";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import authServices from "../../appwrite/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SocialLogin from "./SocialLogin";

export default function Login({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, seterror] = useState("");

  const login = async (data) => {
    seterror("");
    try {
      
        const session = await authServices.loginAccount(data)
        if (session) {
            const userData = await authServices.getAccount();
            // console.log(userData)
            if (userData) dispatch(authLogin(userData));
            navigate("/");
        }
    } catch (error) {
      if(error.message == "Failed to login: Invalid credentials. Please check the email and password.") seterror("Please Signup!")
      else seterror(error.message);
    }
};
  return (
    <div className="w-[30%] border-2 border-gray-900 p-4 mx-auto m-3 flex flex-col justify-evenly gap-5 items-center rounded-md h-fit">
      <h1 className="text-3xl">Login</h1>
      <p className="text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      <form className="flex flex-col justify-center h-[100%] gap-5 w-[90%] items-center" onSubmit={handleSubmit(login)}>
        <Input
          type="email"
          placeholder="Email@"
          classname="w-[80%] rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-lg sm:leading-6"
          label="Email Address *"
          {...register("email",{
            required:true,
            validate:{
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
            }
          })}
        />
        <Input
        type="password"
          placeholder="Password"
          classname="w-[80%] rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 text-lg sm:leading-6"
          label="Password *"
          {...register("password",{
            required:true,
            minLength:8
          })}
        />
        {error && <p className="text-md text-red-500">Error: {error}</p>}
        <Button
          classname="border-2 border-black text-xl font-semibold px-2 py-1 rounded focus:shadow-[inset_0px_0px_5px_black]"
          children="Login"
        />
      <h1>OR</h1>
      <SocialLogin />
      </form>
    </div>
  );
}
