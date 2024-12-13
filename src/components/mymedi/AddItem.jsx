import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';

const AddItem = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({modalType: "create", myMediList: null}));
  }
  return (
    <div className='add-item w-3/5 mx-auto'>
      <div className='flex justify-center'>
        <button className='w-full border shadow-md border-sky-300 bg bg-sky-300 hover:bg-blue-600 hover:border-blue-600 py-4 px-4 flex items-center justify-center' onClick={handleOpenModal}>
          <div className='flex items-center gap-2'>
            <IoIosAddCircleOutline className='w-6 h-6 text-white font-light hover:text-neutral-200 cursor-pointer' />
            <span className='text-white hover:text-neutral-200 cursor-pointer mb-px'>Add List</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AddItem