import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input,Button} from "./index"
import authServices from '../appwrite/auth'
export default function ResetPass() {
  const {register,handleSubmit,watch} = useForm()
  const urlparam = new URLSearchParams(window.location.search)
  const userId = urlparam.get("userId")
  const secret = urlparam.get("secret")
  const [error,seterror] = useState()
  const [success,setSuccess] = useState()
  const getpass= async(data)=>{
    seterror(" ")
      try {
        if(data.newpassword != data.conpassword  ) return seterror("Please Enter Same Password");
        if(data.newpassword.length < 8 || data.conpassword.length < 8) return seterror("Min Length 8")
        
        const user = await authServices.updatepass(userId,secret,data.newpassword,data.conpassword)
        if(user) return setSuccess("Password Change Successfull")
      } catch (error) {
        seterror("error",error.message)
      }
    }
  return (
    <div className="w-[30%] border-2 border-gray-900 p-4 mx-auto m-3 flex flex-col justify-evenly gap-5 items-center rounded-md h-fit">
    <h1 className="text-3xl">Reset Password ?</h1>
    <form
      onSubmit={handleSubmit(getpass)}
      className="flex flex-col justify-center h-[100%] gap-5 w-[90%] items-center"
    >
      <Input
        label="Enter New Password"
        placeholder="Password"
        type="password"
        {...register("newpassword", {
          required: true,
          minLength:8
        })}
        />
        <Input
          label="Enter Confirm Password"
          placeholder="Password"
          type="password"
          {...register("conpassword", {
            required: true,
            minLength:8
          })} />
          {error && <p className="text-md text-red-500"> {error}</p>}
          {success && <p className="text-md text-green-500"> {success}</p>}
      <Button  classname="border-2 border-black text-xl font-semibold px-2 py-1 rounded focus:shadow-[inset_0px_0px_5px_black]"
        children="Change Password"/>
    </form>
  </div>
  )
}
