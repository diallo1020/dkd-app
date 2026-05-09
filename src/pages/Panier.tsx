import { Trash } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Panier = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen p-4 py-40 lg:px-16">
        <h1 className="font-bold text-2xl md:text-3xl">Mon Panier</h1>
        <p className="text-sm md:text-base">
          1 article dans votre panier
        </p>

        {/* Container principal */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">

          {/* Produit */}
          <div className="lg:col-span-3 shadow-xl rounded-xl p-4 bg-white">

            <div className="flex flex-col md:flex-row gap-4">

              {/* Image */}
              <img
                src="/images/img1.png"
                alt=""
                className="w-full md:w-48 h-48 object-cover rounded-xl"
              />

              {/* Infos */}
              <div className="flex-1 flex flex-col justify-between gap-3">
                <div>
                  <h4 className="font-bold text-lg">
                    Collier Étoile Dorée
                  </h4>

                  <p className="text-gray-600 text-sm md:text-base">
                    Collier délicat en plaqué or avec pendentif étoile
                  </p>
                </div>

                <p className="font-bold text-2xl text-primary">
                  150.000 GNF
                </p>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col justify-between items-center md:items-end gap-4">
                
                <Trash className="text-error cursor-pointer" />

                <div className="flex items-center gap-6 border rounded-xl px-4 py-2">
                  <button className="text-xl font-bold">-</button>

                  <span>1</span>

                  <button className="text-xl font-bold">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Résumé */}
          <div className="lg:col-span-2 shadow-xl rounded-xl p-6 bg-white flex flex-col gap-6">

            <h4 className="text-2xl font-bold">
              Récapitulatif
            </h4>

            <div className="flex justify-between border-b pb-4">
              <p>Collier Étoile Dorée x 1</p>
              <p>150 000 GNF</p>
            </div>

            <div className="flex justify-between">
              <p className="font-bold">Total</p>

              <p className="font-bold text-2xl text-primary">
                150 000 GNF
              </p>
            </div>

            <button className="w-full p-4 bg-primary rounded-xl text-white font-semibold">
              <Link to="/Commande">
              Commander maintenant
              </Link>
            </button>

            <button className="w-full border border-gray-200 rounded-xl p-4">
              Continuer mes achats
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Panier;