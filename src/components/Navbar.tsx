import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
       
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Accueil</a></li>
        <li>
          <a>Catégories</a>
          <ul className="p-2">
            <li><a>Bijoux</a></li>
            <li><a>Sacs</a></li>
            <li><a>Chaussures</a></li>
            <li><a>Box</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <img src="/images/logo.png" alt="logo" className='object-cover w-30 h-10 lg:h-20 lg:px-16' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Accueil</a></li>
      <li>
        <details>
          <summary>Catégories</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
             <li><a>Bijoux</a></li>
            <li><a>Sacs</a></li>
            <li><a>Chaussures</a></li>
            <li><a>Box</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <p>Panier</p>
   <ShoppingCart />
  </div>
</div>
  )
}

export default Navbar
