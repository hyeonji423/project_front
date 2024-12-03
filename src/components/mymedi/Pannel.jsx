import React from 'react'

const Pannel = () => {
  return (
    <div className='panel lg:w-4/5 h-full rounded-md border border-neutral-500 py-5 px-4 overflow-y-auto'>
      <div className='panel-wraper w-full h-full'>
        <div className='flex justify-between items-center'>
          <h2>Title</h2>
          <button className='text-sm py-1 px-3 border border-neutral-500 rounded-md cursor-pointer mb-1 sm:block md:hidden xl:hidden'>할 일 추가</button>
        </div>

        <div className='items flex flex-wrap'>
          AddItem
        </div>
      </div>
    </div>
  )
}

export default Pannel