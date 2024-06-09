import React from 'react'
import {Container,Button } from '../index'
import authServices from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'
export default function SocialLogin() {
    const navigate = useNavigate()
    const googlelogin = (e)=>{
        e.preventDefault();
        authServices.GoogleLogin()
    }
  return (
    <div>
        {/* <i class="ri-google-fill"></i> */}
        <Button onClick={(e)=>{googlelogin(e)}} children="Login With Google" classname="border-2 border-black text-xl font-semibold px-2 py-1 rounded focus:shadow-[inset_0px_0px_5px_black] "/>
    </div>
  )
}
