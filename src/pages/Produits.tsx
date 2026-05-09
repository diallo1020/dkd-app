import { Search } from "lucide-react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const Produits = () => {
  return (
    <>
    <div>
    <div>
      <Navbar/>
    <div className="lg:p-8 py-48 lg:py-36 px-6" >
      <div className="space-y-4 lg:px-16" >
      <h1 className="font-bold text-xl lg:2xl">Notre Collection</h1>
      <p className="text-sm">Découvrez nos bijoux, montres, sacs et chaussures</p>
      <div className="flex lg:flex-row flex-col gap-6">
     <label className="input border border-primary flex items-center gap-2 w-70 lg:w-96  ">
  <Search className="w-4 h-4" />

  <input
    type="search"
    required
    placeholder="Rechercher un bijou, une montre..."
    className="grow"
  />
</label>
<div className="flex gap-4">
<button className="rounded-3xl border  p-3 font-bold text-sm hover:border-primary focus:border-primary bg-primary text-white ">Tous</button>
<button className="rounded-3xl border  p-3 font-bold text-sm hover:border-primary focus:border-primary">Bijoux</button>
<button className="rounded-3xl border  p-3 font-bold text-sm hover:border-primary focus:border-primary">Chaussures</button>
<button className="rounded-3xl border  p-3 font-bold text-sm hover:border-primary focus:border-primary">Sacs</button>
</div>
</div>
     
      </div>
       <div className='flex flex-col lg:flex-row py-4 lg:gap-8 lg:px-16 gap-4'>
      
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
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Produits
