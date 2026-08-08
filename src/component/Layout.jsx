import React, { useState } from 'react'
import Navbar from './Navbar'
import Blog from '../page/Blog'
import pic from '../assets/blog.jpg'

const Layout = ({children}) => {


  return (

    <><div className='fixed'>

    <Navbar/>

      <div className=' h-screen w-full relative flex'>

      <aside className='border-r w-[20%] border-gray-200 flex flex-col items-center '>
        <div className='top-3.5 rounded-full  text-center h-36 w-36 overflow-hidden my-4' >
          <img
            src={pic}
            className="w-full h-full object-cover rounded-full border-2 border-gray-600 "
          />
      </div> 
        <h3 className='my-4'>Dipu thapa</h3>
        <div className='flex gap-3 '>
          <div className='cursor-pointer'>followers</div>
          <div className='cursor-pointer'>following</div>
        </div>
      </aside>


      <div className=' w-[80%] overflow-scroll'>
        
       {children}
      </div>
       </div>
    </div>

      


  </>

    
  )
}

export default Layout