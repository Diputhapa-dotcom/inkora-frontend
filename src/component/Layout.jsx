import React, { useState } from 'react'
import Navbar from './Navbar'
import Blog from '../page/Blog'
import pic from '../assets/blog.jpg'

const Layout = () => {
  const [show,setShow] = useState(true)


  return (
    <>
      <div className='border-4 h-screen w-screen flex relative '>

      <aside className='border w-[34%]  border-gray-200 flex flex-col items-center '>
        <div className='top-3.5 rounded-full  text-center h-36   w-36 overflow-hidden'>
<img
  src={pic}
  className="w-full h-full rounded-full border-2 border-gray-600 "
/>
      </div> 
        <h3 className='my-4'>Dipu thapa</h3>
        <div className='flex gap-3 '>
          <div className='cursor-pointer'>followers</div>
          <div className='cursor-pointer'>following</div>
        </div>
        




      </aside>
       <Blog/>
      </div>


  </>

    
  )
}

export default Layout