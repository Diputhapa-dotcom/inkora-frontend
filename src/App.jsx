import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './page/Home'
import Layout from './component/Layout'

const App = () => {
  return (
       <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Register/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/home' element={<Home/> } />
        <Route path='/layout' element={<Layout/> } />
       </Routes>
       </BrowserRouter>

  )
}

export default App