import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Travelwithus from './pages/Travelwithus'
import About from './pages/About'
import Contact from './pages/Contact'
import Queries from './pages/Queries'
import Feedback from './pages/Feedback'
import Pakistanbridges from './pages/Pakistanbridges'
import Chinabridges from './pages/Chinabridges'
import UKbridges from './pages/UKbridges'
import Chainbridge from './pages/Chainbridge'
import Towerbridge from './pages/Towerbridge'
import Millauviaductbridge from './pages/Millauviaductbridge'
import Pakfamousbridge from './pages/Pakfamousbridge'
import Pakoldbridge from './pages/Pakoldbridge'
import Paklongbridge from './pages/Paklongbridge'
import Chinafamousbridge from './pages/Chinafamousbridge'
import Chinaoldbridge from './pages/Chinaoldbridge'
import Chinalongbridge from './pages/Chinalongbridge'
import UKfamousbridge from './pages/UKfamousbridge'
import UKoldbridge from './pages/UKoldbridge'
import UKlongbridge from './pages/UKlongbridge'


const App = () => {
  return (
    <>

<Navbar/>

<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pakistanbridges' element={<Pakistanbridges />} />
        <Route path='/chinabridges' element={<Chinabridges />} />
        <Route path='/ukbridges' element={<UKbridges />} />
        <Route path='/chainbridge' element={<Chainbridge />} />
        <Route path='/towerbridge' element={<Towerbridge />} />
        <Route path='/millauviaductbridge' element={<Millauviaductbridge />} />
        <Route path='/pakfamousbridge' element={<Pakfamousbridge />} />
        <Route path='/pakoldbridge' element={<Pakoldbridge />} />
        <Route path='/paklongbridge' element={<Paklongbridge />} />
        <Route path='/chinafamousbridge' element={<Chinafamousbridge />} />
        <Route path='/chinaoldbridge' element={<Chinaoldbridge />} />
        <Route path='/chinalongbridge' element={<Chinalongbridge />} />
        <Route path='/ukfamousbridge' element={<UKfamousbridge />} />
        <Route path='/ukoldbridge' element={<UKoldbridge />} />
        <Route path='/uklongbridge' element={<UKlongbridge />} />
        <Route path='/#gallery' element={<Gallery />} />
        <Route path='/travelwithus' element={<Travelwithus />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/queries' element={<Queries/>} />  
</Routes>

    </>
  )
}

export default App