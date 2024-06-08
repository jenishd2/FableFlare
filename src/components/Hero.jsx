import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Hero() {
  return (
    <>
    <div className='w-1/2 ml-28'>
      <h1 className='text-7xl'>Let's Share</h1>
      <h1 className='text-7xl'>Something Which </h1>
      <h1 className='text-7xl mb-4'>Help to grow all.</h1>
      <Link to="/signup"><Button children="Get Started" classname="border-2 mt-6 border-black p-3 transition hover:ease-in-out duration-300  text-xl font-semibold hover:shadow-3xl"/></Link>
    </div>
    <div className='w-1/2 h-full flex justify-center items-center'>
      <img src='https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[80%] h-[80%] object-cover object-center rounded-[5%]' />
    </div>
    </>
  )
}
