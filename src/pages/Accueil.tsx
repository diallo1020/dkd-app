
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import { CreditCard, ShieldCheck, ShoppingCart } from 'lucide-react'
import Footer from '../components/Footer'

export default function Accueil() {
  return (
    <>
     <Navbar/>
    <div className='py-36'>
     
   <HeroSection/>
    <h3 className='font-bold text-4xl text-center'>Nouveau arrivage</h3>
      <p className='text-center'>Parcourez notre nouvelle 
       arrivage <br />de sacs et bijoux</p>
    <div className='flex flex-col lg:flex-row p-6 lg:gap-8 lg:px-16 gap-4'>
     
      <Card
      image="/images/hero.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
     <Card
      image="/images/hero2.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
     <Card
      image="/images/img1.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
     <Card
      image="/images/img2.jpg"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
      
    </div>
    <div>
      <h3 className='font-bold text-4xl text-center'>Tous Nos Articles</h3>
      <p className='text-center'>Parcourez notre collection complète
         <br />d'accessoires de mode</p>
       <div className='flex flex-col lg:flex-row p-6 lg:gap-8 lg:px-16 gap-4'>
      
      <Card
      image="/images/hero.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
     <Card
      image="/images/hero2.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
     <Card
       image="/images/hero2.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
     <Card
       image="/images/hero2.png"
      title="Bijoux de lux"
      description="Bijoux de lux"
     price="150.000gnf"/>
      
    </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-center items-center'>
    <div className='bg-primary/10 p-8 m-8 rounded-xl flex flex-col justify-center items-center '>
      <span className='bg-primary flex justify-center items-center 
      rounded-full w-10 h-10 text-white'><ShoppingCart/></span>
      <h6 className='font-bold '>Livraison Garantie</h6>
      <p className='text-sm text-center'>Recevez vos articles directement  chez vous</p>
    </div>
     <div className='bg-accent/15 p-8 m-8 rounded-xl flex flex-col justify-center items-center '>
      <span className='bg-accent flex justify-center items-center 
      rounded-full w-10 h-10 text-white'><CreditCard /></span>
      <h6 className='font-bold '>Paiement Sécurisé</h6>
      <p className='text-sm text-center'>Payez à la livraison en toute confiance </p>
    </div>
     <div className='bg-error/10 p-8 m-8 rounded-xl flex flex-col justify-center items-center gap-2 '>
      <span className='bg-error flex justify-center items-center 
      rounded-full w-10 h-10 text-white'><ShieldCheck /></span>
      <h6 className='font-bold '>Qualité Premium</h6>
      <p className='text-sm text-center'>Articles soigneusement sélectionnés </p>
    </div>
    </div>
    <Footer/>
   
   </div>
   </>
  )
}
