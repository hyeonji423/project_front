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
    <div className='container mx-auto px-40 flex justify-center'>
      <div className='add-item w-full'>
        <button className='w-full border border-blue-400 rounded-md bg bg-blue-400 hover:bg-blue-600 py-3 px-4 flex items-center justify-center' onClick={handleOpenModal}>
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