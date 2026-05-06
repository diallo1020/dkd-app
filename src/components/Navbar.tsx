import { House, Mail, PackageSearch, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
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
<div className='p-2' >
  <ul className='flex justify-center items-center gap-6 '>
    <li className='flex flex-col justify-center items-center rounded-xl p-2 text-sm'><House width={20} /><a>Accueil</a></li>
    <li className='flex flex-col justify-center items-center rounded-xl p-2 text-sm'><PackageSearch width={20} /><a>Produit</a></li>
    <li  className='flex flex-col justify-center items-center rounded-xl p-2 text-sm'><Mail width={20} /><a>Contact</a></li>
  </ul>
</div>
</>
  )
}

export default Navbar
