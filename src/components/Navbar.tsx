import { House, Mail, PackageSearch, ShoppingCart } from 'lucide-react'

import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
  <div className='fixed w-full'>
   <div className="navbar bg-base-100 shadow-sm lg:fixed">
  <div className="navbar-start">
    <img src="/images/logo.png" alt="logo" className='object-cover w-30 h-10 lg:h-20 lg:px-16' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a  className='hover:bg-primary/50 '> 
      <NavLink
      to="/"
      className={({ isActive })  =>
          `flex  justify-center items-center rounded-xl p-2 text-sm gap-2 ${
          isActive
        ?"text-primary font-bold"
        :"text-black"
      }`
      }
      >
         <House width={20} />

       Accueil
       </NavLink>
       </a></li>
      <li>
       <a className='hover:bg-primary/50'>
        <NavLink 
        to="/Produits"
          className={
            ({isActive}) =>
             `flex  justify-center items-center rounded-xl p-2 text-sm gap-2 ${
          isActive
        ?"text-primary font-bold"
        :"text-black"
      }`
      }
      >
         <PackageSearch width={20} />
         Produits
         </NavLink>
         </a>
      </li>
      <li>
        <a className='hover:bg-primary/20'>
          <NavLink
          to="/Contact"
          className={
            ({isActive}) => 
              `flex justify-center items-center gap-2 p-2 rounded-xl text-sm  ${
             isActive
               ?"text-primary font-bold"
               :"text-black"
            }`
          }>
            <Mail width={20} />
          Contact
          </NavLink></a>
        </li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <p>Panier</p>
   <ShoppingCart />
  </div>
</div>
<div className='bg-white  shadow-xl  lg:hidden border ' >
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
    <li>
      <a>
        <NavLink to="/Produits"
         className= {
           ({isActive}) =>
          `flex flex-col justify-center items-center rounded-xl p-2 text-sm ${
         
            isActive
            ?"text-primary font-bold"
            :"text-black"
            }`
         }>
       <PackageSearch width={20} />
      Produit</NavLink></a></li>
    <li  className='flex flex-col justify-center items-center rounded-xl p-2 text-sm'>
      
      <a>
        <NavLink
        to="/Contact"
        className={
          ({isActive}) => 
            `flex flex-col justify-center items-center p-2 gap-2 rounded-xl ${
              isActive
              ?"text-primary font-bold"
              :"text-black"
              }`
        }>
        <Mail width={20} />
        Contact
        
        </NavLink>
        </a></li>
  </ul>
</div>
</div>
</>
  )
}

export default Navbar
