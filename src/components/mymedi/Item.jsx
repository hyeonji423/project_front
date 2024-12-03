import React from 'react'
import { MdEditDocument, MdDelete } from "react-icons/md";

const Item = () => {
  return (
    <div className='item w-full md:w-1/2 xl:w-1/3 h-[25vh] p-[0.25rem]'>
      <div className='w-full h-full border border-neutral-500 rounded-md bg bg-neutral-800 py-3 px-4 flex flex-col justify-between'>
        <h2 className='item-title text-lg font-normal mb-1.5 relative pt-1 pb-3 flex justify-between px-1'>
          <span className='item-line w-full absolute bottom-1 left-0 h-px bg-neutral-500'></span>
          Title
          <span className='text-sm py-1 px-3 border border-neutral-500 rounded-md cursor-pointer mb-1'>자세히</span>
        </h2>
        <p className='px-1 text-[15px]'>본문</p>
      </div>

      <div className='lower'>
        <p className='date text-sm mb-4 px-1 text-neutral-400'>2024-12-03</p>
        <div className='item-footer flex gap-1 items-center'>
          <button>
            <MdEditDocument className='w-6 h-6' />
          </button>
          <button className='delete'>
            <MdDelete className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item