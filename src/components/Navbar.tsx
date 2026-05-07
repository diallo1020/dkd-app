import { House, Mail, PackageSearch, ShoppingCart } from 'lucide-react'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <img src="/images/logo.png" alt="logo" className='object-cover w-30 h-10 lg:h-20 lg:px-16' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a  className='hover:bg-primary/50 '> 
      <NavLink
      to="/"
      className={({ isActive })  =>
        isActive
           ? "text-primary font-bold"
            : "text-black"
      }
      >

       Accueil
       </NavLink>
       </a></li>
      <li>
       <a>
        <NavLink 
        to="/Produits"
          className={
            ({isActive}) =>
              isActive
            ?"text-primary font-bold"
            : "text-black"
          }
          >
         Produits
         </NavLink>
         </a>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <p>Panier</p>
   <ShoppingCart />
  </div>
</div>
<div className='p-2 lg:hidden' >
  <ul className='flex justify-center items-center gap-6 '>
    <li >
    <a>
      <NavLink to="/"
      className={
        ({isActive}) =>
          `flex flex-col justify-center items-center rounded-xl p-2 text-sm ${
          isActive
        ?"text-primary font-bold"
        :"text-black"
      }`
      }
      >
        <House width={20} />
      Accueil</NavLink>
    </a></li>
    <li className='flex flex-col justify-center items-center rounded-xl p-2 text-sm'><PackageSearch width={20} /><a><Link to="/Produits">Produit</Link></a></li>
    <li  className='flex flex-col justify-center items-center rounded-xl p-2 text-sm'><Mail width={20} /><a>Contact</a></li>
  </ul>
</div>
</>
  )
}

export default Navbar
