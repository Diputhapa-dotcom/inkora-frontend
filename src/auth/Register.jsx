import React from 'react'
import Auth from './component/Auth'
import { useDispatch } from 'react-redux'
import { register } from '../store/userSlice'
const Register = () => {
  const dispatch = useDispatch()
    const handleRegister = async (data) =>{
     dispatch(register(data))

    }


  return (
    <Auth type='Register' onSub = {handleRegister}/>  
  )
}

export default Register