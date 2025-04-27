import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import './assets/font/stylesheet.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Drower from './components/drower/Drower'
import DataBasket from './components/Context/DataBasket'

import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Gift from './pages/gift/Gift'
import Menumore from './pages/menumore/Moremenu'
import Stores from './pages/stores/Stores'
import Elements from './pages/elements/Elements'
import Rewards from './pages/rewards/Rewards'
import Basket from './pages/basket/Basket'
import Err from './pages/error/Err'


function App() {

  const [mainBasket, setMainBasket] = useState([])
  const [maindb, setMainDb] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/faridmsta/starbucksjson/main/db.json')
      .then(res => res.json())
      .then(res => {
        setMainDb(res)
        setLoading(false)

      })
  }, [])

  if (loading) {
    return (
      <div className='Loading'>
        <img src="./src/assets/img/loading.png" alt="" />
      </div>);
  }
  return (
    <>
      <DataBasket.Provider value={{ mainBasket: mainBasket, setMainBasket: setMainBasket, maindb: maindb }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/gift' element={<Gift />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/store-locator' element={<Stores />} />
          <Route path='/menu/:sec/:nm' element={<Menumore />} />
          <Route path='/menu/:sec/:nm/:drknm' element={<Elements />} />
          <Route path='/menu/basket' element={<Basket />} />
          <Route path='/*' element={<Err />} />

        </Routes>
        <Drower />
        <Footer />
      </DataBasket.Provider>
    </>
  )
}

export default App
