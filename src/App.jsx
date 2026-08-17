import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './page/Home'
import Layout from './component/Layout'
import Main from './page/Main'
import SingleBlog from './page/SingleBlog'
import AddBlog from './page/AddBlog'

import { Provider } from 'react-redux'
import store from './store/Store'

const App = () => {
  return (
    <Provider store={store}>

       <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Register/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/home' element={<Home/> } />
        <Route path='/layout' element={<Layout/> } />
        <Route path='/main' element={<Main/> } />
        <Route path='/blog/id' element={<SingleBlog/> } />
        <Route path='/blog/add' element={<AddBlog/> } />
       </Routes>
       </BrowserRouter>

    </Provider>
  )
}

export default App