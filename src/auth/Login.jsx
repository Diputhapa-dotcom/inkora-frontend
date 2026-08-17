import React from 'react'
import Auth from './component/Auth'
import { urlBase } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../store/userSlice'

const Login = () => {
  const {status}= useSelector((state)=>state.user)
  console.log(status)
  const dipatch = useDispatch()
    const handleLogin =async  (data) =>{
      console.log(data)
       dispatch( user( data ) )



  }
  return (
<Auth type="Login" onsub = {handleLogin}/>  )
}

export default Login