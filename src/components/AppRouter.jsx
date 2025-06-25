import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './Login'
import Cart from '../pages/Cart'
import { ProductsFetch } from '../Features/ProductsFetch'

export default function AppRouter() {
  return (
<>
<Routes>
	<Route path='/'element={<Home/>}/>
	<Route path='/about' element={<About/>}/>
	<Route path='/product' element = {<ProductsFetch/>}/>
	<Route path='/cart' element={<Cart/>}/>
	<Route path='/register' element = {<RegisterPage/>}/>
	<Route path='/login' element = {<LoginPage />}/>
</Routes>
</>
  )
}
 