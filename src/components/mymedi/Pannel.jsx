import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMyMediListData } from '../../redux/slices/myMediSlice';

const Pannel = () => {

  const loginData = useSelector(state=>state.login.user)
  const userKey = loginData?.sub
  const dispatch = useDispatch()

  const getMyMediList = useSelector((state)=>state.myMedi.getMyMediListData)
  const isOpen = useSelector((state)=>state.modal.isOpen)

  useEffect(()=>{
    if(!userKey) return
    
    const fetchMyMediList = async()=>{
      try {
        await dispatch(fetchGetMyMediListData(userKey)).unwrap()
        
      } catch (error) {
        console.error("Failed to fetch my medi list", error)
      }   
    }

    fetchMyMediList()
  },[dispatch, userKey])

  const handleOpenModal = ()=>{
    dispatch(openModal({modalType: "create", myMediList: null}))
  }

  return (
    <div className='pannel lg:w-4/5 h-full rounded-md border border-neutral-500 py-5 px-4 overflow-y-auto'>
      {/* {userKey ? () : ()} */}
      <div className='pannel-wraper w-full h-full'>
        <div className='flex justify-between items-center'>
          <h2>나의 약 목록</h2>
          <button className='text-sm py-1 px-3 border border-neutral-500 rounded-md cursor-pointer mb-1 sm:block md:hidden xl:hidden' onClick={handleOpenModal}>목록 추가</button>
        </div>

        <div className='items flex flex-wrap'>
          AddItem
        </div>
      </div>
    </div>
  )
}

export default Pannel