import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Profile from '../components/Profile'


const Dashboard = () => {
  const location =  useLocation()
  const [tab, setTab] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  },[location.search])

  return (
    //px-[0.8rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem]
    <div className='min-h-screen flex flex-col sm:flex-row sm:block'>
      <div className="">
        {/* side bar */}
        <SideBar />
      </div>
      <div className=" ">
        {/* profile */}
        {tab === "profile" && <Profile />}
      </div>
    </div>
  )
}
// sm:float-right

export default Dashboard