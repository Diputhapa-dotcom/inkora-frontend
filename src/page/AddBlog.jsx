import React from 'react'
import Navbar from '../component/Navbar';

const AddBlog = () => {
  return (
  <>
<Navbar type='Addblog'/>
<form>
  <div className='mx-70 my-4.5'>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full text-5xl font-bold outline-none mb-4"
        />
      <input
        type="text"
        name="subtitle" 
        placeholder="Subtitle"
        className="w-full text-2xl font-medium outline-none mb-4"
        />
        <label className='cursor-pointer text-2xl text-gray-600'>
           <ion-icon name="add-circle-outline"></ion-icon>
           <input type="file" className='hidden'/>
        </label>

         <textarea
        placeholder="Write your story..."
        className="w-full min-h-125 text-xl leading-8 outline-none resize-none"
        />


        </div>
  </form>
        </>
  );
};




export default AddBlog