import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Navbar from '../../component/Navbar';

const Form = forwardRef(({type,onSub}, ref) => {
  const [data,setData] = useState({
    title: '',
    subtitle: '',
    content: '',
    files: null
  })

  const handleBlog = (e) => {
    const { name, value, files } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: name === 'files' ? files?.[0] ?? null : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSub(data)
  }
    useImperativeHandle(ref, () => ({
        submitForm() {
            document.getElementById("blog-form").requestSubmit();
        }
    }))



  return (
  <>
<form id='blog-form' onSubmit={handleSubmit}>
 <div className='mx-70 my-4.5'>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full text-5xl font-bold outline-none mb-4" 
        onChange={handleBlog}
        />
      <input
        type="text"
        name="subtitle" 
        placeholder="Subtitle"
        className="w-full text-2xl font-medium outline-none mb-4"
        onChange={handleBlog}
        />
        <label className='cursor-pointer text-2xl text-gray-600'>
           <ion-icon name="add-circle-outline"></ion-icon>
           <input
             type="file"
             className='hidden'
             name='files'
             onChange={handleBlog}
           />
        </label>

         <textarea
         name='content'
        placeholder="Write your story..."
        className="w-full min-h-125 text-xl leading-8 outline-none resize-none"
        onChange={handleBlog}
        />


        </div>
</form>
 </>
  )
});



export default Form