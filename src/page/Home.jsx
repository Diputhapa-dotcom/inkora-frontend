import React from 'react'
import blog from '../assets/blog.jpg'
import logo from '../assets/ik_logo.png'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
  <>
  <Navbar type="Home"/>
  <div className="flex flex-wrap">
  <div className="w-full sm:w-8/12 mb-10">
    <div className="container mx-auto h-full sm:p-10">
      <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
        <div className="w-full">
          <h1 className="text-4xl lg:text-6xl font-bold">Share your <br/>
             <span className="text-green-700"> stories and ideas</span> <br/> through the inkora</h1>
          <div className="w-20 h-2 bg-green-700 my-4" />
          <p className="text-xl mb-10">Create, publish, and inspire with blogs that make a lasting impact worldwide.</p>
          <button className="bg-green-500 text-white text-2xl font-medium  rounded-full p-3 shadow">Start reading</button>
        </div>
      </header>
    </div>
  </div>
  <img src={blog} alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
</div>

<footer className="bg-gray-600 py-2 px-2 shadow-md z-10 flex justify-content-center align-items-center  dark:text-white">
  <div className="text-sm text-gray-600 dark:text-gray-300">Copyright © 2023 My Company</div>
  <div className="flex ml-auto gap-4">
    <a href="#" className="dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-400">Terms &amp;
      Conditions
    </a>
    <a href="#" className=" hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-400">Privacy
      Policy
    </a>
  </div>
</footer>

</>
  )
}

export default Home