import React from 'react'
import Auth from './component/Auth'

const Login = () => {
    const handleLogin = (data) =>{
        console.log(data)

    }
  return (
<Auth type="Login" onsub = {handleLogin}/>  )
}

export default Login