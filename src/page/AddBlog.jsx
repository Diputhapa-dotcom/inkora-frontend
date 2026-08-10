import React, { useRef } from 'react'
import Navbar from '../component/Navbar'
import Form from './component/Form'
import axios from 'axios';
import { urlBase } from '../../config';

const AddBlog = () => {
  const formRef = useRef();

const handleAddBlog = (data) => {
  const response = axios.post(`${urlBase}/blog/add`,data,{
    headers : {
      "Content-Type" : "multipart/form-data",
      
    }
  })
  if(response.status === 200){
    console.log("data sent successfully")
  }

}

  return (
<>
<Navbar type='Addblog' onSubmit={() => formRef.current.submitForm()}/>
<Form type = 'Addblog'  onSub = {handleAddBlog} ref={formRef} />

</>

)
}

export default AddBlog