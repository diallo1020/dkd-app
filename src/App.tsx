
import Panier from './pages/Panier'
import Accueil from './pages/Accueil'
import Contact from './pages/Contact'
import Produits from './pages/Produits'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Commande from './pages/Commande'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/Produits' element={<Produits/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Panier' element={<Panier/>}/>
      <Route path='/Commande' element={<Commande/>}/>
       

    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
