import './App.css'
import './components/font/stylesheet.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Gift from './components/Gift'
import Menumore from './components/Moremenu'
import { Route, Routes } from 'react-router-dom'
import Stores from './components/Stores'
import Elements from './components/Elements'
import Rewards from './components/Rewards'
import Drower from './components/Drower'
import Basket from './components/Basket'
import { useState } from 'react'


function App() {

  const [basket,setBasket]= useState()

  return (
    <>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/gift' element={<Gift />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/store-locator' element={<Stores />} />
          <Route path='/menu/:sec/:nm' element={<Menumore />} />
          <Route path='/menu/:sec/:nm/:drknm' element={<Elements />} />
          <Route path='/menu/basket' element={<Basket/>} />
        </Routes>
        <Drower />
        <Footer />
      
    </>
  )
}

export default App
