import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const AddItem = () => {
  return (
    <div className='add-item w-full md:w-1/2 xl:w-1/3 h-[25vh] p-[0.25rem] group'>
      <button className='w-full h-full border border-neutral-600 rounded-md bg bg-neutral-900 group-hover:bg-neutral-600 py-3 px-4 flex items-center justify-center'>
        <div className='flex items-center gap-2'>
          <IoIosAddCircleOutline className='w-6 h-6 text-neutral-400 font-light group-hover:text-neutral-200 cursor-pointer' />
          <span className='text-neutral-400 group-hover:text-neutral-200 cursor-pointer mb-px'>Add List</span>
        </div>
      </button>
    </div>
  )
}

export default AddItem