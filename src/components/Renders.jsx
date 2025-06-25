import React from 'react'
import { RegisterPage } from './RegisterPage'
import { SuccessPage } from './SuccessPage'
import { Route, Router, Routes } from 'react-router-dom'
import { LoginPage } from './Login'
import Headerss from './Headerss'

export default function Renders() {
  return (
	<>
 
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/headress" element={<Headerss />} />


      </Routes>
	  
	</>
  )
}
