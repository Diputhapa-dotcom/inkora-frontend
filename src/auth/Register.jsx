import React from 'react'
import Auth from './component/Auth'

const Register = () => {
    const handleRegister = (data) =>{
        console.log(data)

    }


  return (
    <Auth type='Register' onSub = {handleRegister}/>
  )
}

export default Register