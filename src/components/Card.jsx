import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function Card({$id,featuredImg,title}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full h-[400px] border-2 justify-center flex items-center flex-col border-black rounded-xl p-4'>
            <div className='w-full  h-[90%] mb-4'>
                <img src={service.getFilePreview(featuredImg)} alt={title}
                className='rounded-xl h-full w-full object-cover object-center' />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default Card
