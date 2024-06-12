import React, { useState } from "react";
import { Button, Input } from "../components/index";
import { useForm } from "react-hook-form";
import authServices from "../appwrite/auth";


export default function ForgetPass() {
  const { handleSubmit, register } = useForm();
  const [success,setSuccess] = useState("")
  const [error,seterror] = useState("")
  const getemail = async (data) => {
    const url = "https://fable-flare.vercel.app/reset-password"
    setSuccess("")
    try {
      const user = await authServices.forgetpass(data.email, url);
      if (user) {
        setSuccess("Check Your Email ")
      } 
    } catch (error) {
      seterror("Error:",error)
    }
  };
  return (
    <div className="w-[30%] max-ml:w-[90%] border-2 border-gray-900 max-ml:p-2  p-4 mx-auto m-3 flex flex-col justify-evenly gap-5 items-center rounded-md h-fit">
      <h1 className="text-3xl">Forgot Password ?</h1>
      <form
        onSubmit={handleSubmit(getemail)}
        className="flex flex-col justify-center h-[100%] gap-5 w-[90%] items-center"
      >
        <Input
          label="Enter Your Email Address"
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        {success && <p className="text-green-500 max-ml:text-lg ">{success}</p>}
        {error && <p className="text-red-500  max-ml:text-lg">{error}</p>}
        <Button
          classname="border-2 border-black text-xl font-semibold px-2 py-1 rounded focus:shadow-[inset_0px_0px_5px_black]"
          children="Send"
        />
      </form>
    </div>
  );
}
