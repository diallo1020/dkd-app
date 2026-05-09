import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Commande = () => {
  return (

       <>
    <Navbar/>
    
    <div className="lg:py-6 lg:px-32 py-48 px-6">
      <h1 className="flex justify-center items-center font-bold text-2xl lg:text-3xl ">Finaliser ma commande</h1>
      <p className="lg:flex lg:justify-center lg:items-center text-center">Complétez vos informations pour recevoir vos articles</p>
      <div className="grid lg:grid-cols-2  gap-4 py-6">
        <div className="  border p-4 rounded-xl  shadow-lg grid row-span-2">
        <form action="" className="flex-col space-y-4">
            <h3 className="text-2xl font-bold">Informations de livraison</h3>
            <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">Nom Complet</label>
            <input type="text" placeholder="Entrer votre nom"
            className="input border border-gray-300 rounded-lg focus:outline-none  focus:border-primary " />
            </div>
             <div className="flex flex-col gap-2">
            <label htmlFor="number" className="font-bold">Numero de telephone</label>
            <input type="mail" placeholder="example@gmail.com"
            className="input border border-gray-300 focus:border-primary focus:outline-none " />
            </div>
             <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-bold">Quartier</label>
            <input type="text" placeholder="Besoin de plus d'information sur un produit"
            className="input border border-gray-300 focus:border-primary focus:outline-none " />
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="font-bold">Email (facultatif)</label>
            <input type="text" placeholder="Besoin de plus d'information sur un produit"
            className="input border border-gray-300 focus:border-primary focus:outline-none " />
            </div>
            <div className="p-4 bg-primary/10 rounded-xl">
            <p>💡 Paiement à la livraison : Vous paierez lors de la réception de vos produits</p>
          </div>
            <button className="p-2 bg-primary text-white w-full rounded-xl"> confirmer la commande</button>
             
        </form>
       
        </div>
         <div className="flex flex-col py-6 px-8 gap-4 border rounded-xl shadow-lg">
        <h3 className=" lg:text-2xl text-xl font-bold">Nos coordonnées</h3>
         <div className="grid grid-cols-2 grid-rows-3 h-28 gap-3">
            <img src="/images/img1.png" alt="" className="row-span-3 h-full w-full object-cover rounded" />
            <div>
                <h3 className="font-bold">Collier Étoile Dorée</h3>
                <p className="text-sm">Qté: 1</p>
                <p className="font-bold text-primary">150 000GNF</p>
            </div>
          </div>
          <div className="flex justify-between border-t-2 py-2">
            <p>Sous-total</p>
            <p className="font-bold ">150 000GNF</p>
          </div>
           <div className="flex justify-between border-b-2 py-2">
            <p>Livraison</p>
            <p className="font-bold text-primary ">20 000GNF</p>
          </div>
           <div className="flex justify-between border-b-2 py-2">
            <p className="font-bold">Total</p>
            <p className="font-bold text-primary text-xl ">150 000GNF</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-xl">
            <p>Mode de paiement: 💰 À la livraison</p>
          </div>
      </div>
     
      </div>
   
      <Footer/>
    </div>
    </>
  )
}

export default Commande
