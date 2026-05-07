
import Accueil from './pages/Accueil'
import Produits from './pages/Produits'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil />}/>
       <Route path='/Produits' element={<Produits/>}>

      </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
