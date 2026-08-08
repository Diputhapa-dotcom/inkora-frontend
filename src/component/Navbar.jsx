import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ik_logo.png'

const Navbar = ({type}) => {

  return (
    
<div className="flex p-1 justify-between items-cente flex-wrap border border-gray-300">
  <div className="flex items-center">
    <img src={logo} className="w-15 " />
    <h2 className="font-bold text-2xl text-black">Inkora</h2>
  </div>
   {
    type !== 'Home' && (

        <div className="relative items-center hidden md:inline-flex">
    <input type="text" placeholder="Search" className="border border-gray-200 rounded-md py-1 px-2" />
    <svg className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>

)
}
  <div className="flex items-center gap-12">
  <Link to = "/" className="hover:border-b-2 border-black ">Our story</Link>
  <Link to = "/" className="hover:border-b-2 border-black " >Write</Link>
  <Link to = "/" className="hover:border-b-2 border-black ">Sign in</Link>
   
    <button className=" p-1.5 rounded-full bg-black text-white">Get started</button>
  </div>
</div>

  )
}

export default Navbar