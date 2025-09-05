import React from 'react'
import { Link } from 'react-router-dom'

export default function Headerss() {
  return (
	<>
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
       
        <div className="text-2xl font-bold">MyLogo</div>

        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/product" className="hover:text-gray-300">Products</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to='/cart' className='hover:text-gray-300'>🛒Cart </Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
           <Link to="/login" className="hover:text-gray-300">Login</Link>

        </nav>
      </div>
    </header>

	</>
  )
}
