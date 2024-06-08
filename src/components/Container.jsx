import React from 'react'

export default function Container({classname,...props}) {
  return (
    <div className={` w-full h-[679px] ${classname}`} {...props} >
      
    </div>
  )
}
