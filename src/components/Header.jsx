import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './img/Logo.png'
import { SiStarbucks } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

function Header() {
  const [menu, setMenu] = useState(false)
  const [containerClass, setContainerClass] = useState('container');
  const [logoPosition, setLogoPosition] = useState('absolute');
  const location = useLocation();
  const hammenu= document.querySelector(`.hamburgerMenu`)
  useEffect(() => {

    const hasMenu = window.location.pathname.includes('/menu') || window.location.pathname.includes('/gift');

    setContainerClass(hasMenu ? '' : 'container');
    setLogoPosition(hasMenu && 'logostat');
  }, [location]);


  function animationMenu(bool) {
    if (!bool) {
      document.body.style.overflowY='hidden'
      hammenu.classList.add('menuOpened1') 
      setTimeout(()=>{
        hammenu.classList.add('menuOpened') 
      },200)

    }
    else{
      document.body.style.overflowY='unset'
      hammenu.classList.remove('menuOpened') 
      setTimeout(()=>{
        hammenu.classList.remove('menuOpened1') 
      },200)
    }

  }

  return (
    <div className="allHeader">
      <header>
        <div className={`${containerClass}`} >
          <div className="header">
            <div className={`logo ${logoPosition} `} >
              <Link onClick={() => { setMenu(false) }} to='/'>
                {/* <img src={Logo} alt="" /> */}
                <SiStarbucks />
              </Link>
            </div>
            <nav className='navbar'>
              <ul>
                <li><NavLink to='/menu'>Menu</NavLink></li>
                <li><NavLink to='/rewards'>Rewards</NavLink></li>
                <li><NavLink to='/gift'>Gift Cards</NavLink></li>
              </ul>
              <div className="reg">
                <ul>
                  <li><NavLink to='/store-locator' className='findStore'><FaLocationDot size={"21px"} /> Find a store</NavLink></li>
                </ul>
                <div className="register">
                  <Link>Sign in</Link>
                  <Link>Join now</Link>
                </div>

              </div>
            </nav>
            <div onClick={() => { setMenu(!menu), animationMenu(menu) }} className={`hamburgerMenu`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div >
        <nav className={`togglenav ${menu && `openTogglenav`}`}>
          <ul>
            <li><Link to='/menu' onClick={() => { setMenu(false),animationMenu(menu) }}>Menu</Link></li>
            <li><Link to='/rewards' onClick={() => { setMenu(false),animationMenu(menu) }}>Rewards</Link></li>
            <li><Link to='/gift' onClick={() => { setMenu(false),animationMenu(menu) }}>Gift Cards</Link></li>
          </ul>
          <div className="grline">
            <hr />
          </div>
          <div className="reg">
            <div className="register">
              <Link>Sing in</Link>
              <Link>Join now</Link>
            </div>
            <Link to='/store-locator' className='findStore'><FaLocationDot size={"21px"} /> Find a store</Link>
          </div>
        </nav>
      </header >
    </div >
  )
}

export default Header