
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'


function App() {


  return (
    <>
    <div>
      <Navbar/>
   <HeroSection/>
    <div className='flex flex-col lg:flex-row p-4 lg:gap-8 lg:px-16 gap-4'>
      <h3 className='font-bold text-4xl text-center'>Nouveau arrivage</h3>
      <p className='text-center'>Parcourez notre nouvelle 
       arrivage <br />de sacs et bijoux</p>
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
       <div className='flex flex-col lg:flex-row p-4 lg:gap-8 lg:px-16 gap-4'>
      <h3 className='font-bold text-4xl text-center'>Tous Nos Articles</h3>
      <p className='text-center'>Parcourez notre collection complète
         <br />d'accessoires de mode</p>
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
    </div>
    <Footer/>
   </div>
    </>
  )
}

export default App
