import React, { useRef } from 'react'
import Navbar from '../component/Navbar'
import Form from './component/Form'

const AddBlog = () => {
  const formRef = useRef();

const handleAddBlog = (data) => {
  console.log("the data is",data)

}

  return (
<>
<Navbar type='Addblog' onSubmit={() => formRef.current.submitForm()}/>
<Form type = 'Addblog'  onSub = {handleAddBlog} ref={formRef} />

</>

)
}

export default AddBlog