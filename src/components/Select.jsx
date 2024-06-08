import React,{useId} from 'react'
import { forwardRef } from 'react';

function Select({
    label,
    options,
    classname,
    ...props
},ref) {
    const id = useId();
    return (
        <div className='w-full'>
        {
            label && <label className="" htmlFor={id}></label>
            
        }
        <select name="" id={id} className={classname} ref={ref} {...props}>
            {
                options?.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                ))
            }
        </select>
        </div>
    )
}

export default forwardRef(Select)
