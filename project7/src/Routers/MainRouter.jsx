import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product"
import SinglePage from "../Pages/SinglePage"
import Error from '../Pages/Error'
import Login from '../Pages/Login'
import PrivateRoute from '../Components/PrivateRoute'

function MainRoute() {
  return (
    <div>
      <Routes>
           <Route path='/' element={<Home/>}></Route>           
           <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}></Route>
           <Route path='/product/:id' element={<SinglePage/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='*' element={<Error/>}></Route>
      </Routes>

    </div>
  )
}

export default MainRoute