import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Post from './pages/Post'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='max-w-[1500px] mx-auto px-[0.8rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl-[8rem] dark:text-white light"text-[#000]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/post' element={<Post />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
