import { Mail, MapPinHouse, Phone } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="lg:py-6 lg:px-32 py-48 px-6">
      <h1 className="flex justify-center items-center font-bold text-2xl lg:text-3xl ">Contactez-nous</h1>
      <p className="lg:flex lg:justify-center lg:items-center text-center">Nous sommes à votre écoute pour toute question </p>
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-4 py-6">
        <div className="  border p-4 rounded-xl  shadow-lg grid row-span-2">
        <form action="" className="flex-col space-y-4">
            <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">Nom</label>
            <input type="text" placeholder="Entrer votre nom"
            className="input border border-gray-300 rounded-lg focus:outline-none  focus:border-primary " />
            </div>
             <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="font-bold">Email</label>
            <input type="mail" placeholder="example@gmail.com"
            className="input border border-gray-300 focus:border-primary focus:outline-none " />
            </div>
             <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-bold">Sujet</label>
            <input type="text" placeholder="Besoin de plus d'information sur un produit"
            className="input border border-gray-300 focus:border-primary focus:outline-none " />
            </div>
             <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea placeholder="Besoin de plus d'information sur un produit"
            className="input border border-gray-300 p-3 focus:border-primary focus:outline-none " />
            </div>
        </form>
       
        </div>
         <div className="flex flex-col py-6 px-8 gap-3 border rounded-xl shadow-lg">
        <h3 className=" lg:text-2xl text-xl font-bold">Nos coordonnées</h3>
        <div className="flex flex-row gap-4">
        <span className='bg-success flex  justify-center items-center 
      rounded-full w-10 h-10 text-white'><Phone />
      </span>
      <div>
        <h6 className="font-bold">Téléphone</h6>
        <p>+224 627 32 54 59</p>
      </div>
      </div>
       <div className="flex flex-row gap-4">
        <span className='bg-secondary flex  justify-center items-center 
      rounded-full w-10 h-10 text-white'><Mail />
      </span>
      <div>
        <h6 className="font-bold">Email</h6>
        <p>contact@boutique.com</p>
      </div>
      </div>
       <div className="flex flex-row gap-4">
        <span className='bg-warning flex  justify-center items-center 
      rounded-full w-10 h-10 text-white'><MapPinHouse />
      </span>
      <div>
        <h6 className="font-bold">Adresse</h6>
        <p>Conakry,Lambanyi</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col py-6 px-8 gap-3 border rounded-xl shadow-lg bg-primary/10">
         <h3 className="font-bold text-2xl">Horaires d'ouverture</h3>
         <div className="flex justify-between border bg-white p-4 rounded-xl  ">
            <p>Lundi - Vendredi</p>
            <p>8h - 18h</p>
         </div>
         <div className="flex justify-between border bg-white p-4 rounded-xl  ">
            <p>Samedi</p>
            <p>9h - 16h</p>
         </div>
         <div className="flex justify-between border bg-white p-4 rounded-xl  ">
            <p>Dimanche</p>
            <p className="text-gray-400 ">Fermé</p>
         </div>
      </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Contact
