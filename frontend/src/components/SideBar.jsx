import React, { useEffect, useState } from 'react'
import { HiChartPie, HiUser } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

const SideBar = () => {

    const currentUser = useSelector((state) => state.user)
    const [active, setActive] = useState(true)
    const location = useLocation()
    const [tab, setTab] = useState("")


    useEffect(() => {
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get("tab")
      if(tabFromUrl) {
        setTab(tabFromUrl);
      }
      
      if (tabFromUrl === "profile"){
        console.log(tabFromUrl)
      }
    },[location.search])

    

  return (
    <div className='w-full sm:w-[20%] md:w-[30%] lg:w-[17%] sm:min-h-screen bg-gray-100 sm:absolute'>
        <div className="flex flex-col gap-4 pt-6 py-[0.7rem] sm:py-auto px-[0.7rem] sm:px-[1rem] text-[15px]">
            {currentUser && <NavLink className={`w-full px-[1rem] py-[0.5rem] rounded ${tab === "dash" && "bg-white"}`} to={"/dashboard?tab=dash"}>
             <div className="flex gap-2 items-center"><HiChartPie /><span className='sm:hidden md:block'>Dasboard</span></div>
            </NavLink>}
            <NavLink className={`w-full flex justify-between px-[1rem] py-[0.5rem] rounded gap-2 ${tab === "profile" && "bg-white"}`} to={"/dashboard?tab=profile"}>
             <div className="flex gap-2 items-center"><HiUser /> <span className='sm:hidden md:block'>Profile</span></div>
             <div className=" bg-green-300 px-[0.3rem] py-[0.2rem] rounded text-[0.6rem]">User</div>
            </NavLink>
        </div>

    </div>
  )
}

export default SideBar