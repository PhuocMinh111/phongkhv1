import React, { useEffect } from 'react'
import logo  from './images/logo.svg'
import img from './images/pharmacy-2.png'
import { FaBars,FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { UseGlobalContext } from './context'
const Navbar = () => {
  const {openSideBar,isSideBarOpen,closeSideBar} = UseGlobalContext();

  return (
  <nav className='nav'>
    <div className="nav-center">
      <Link to='/'>
      <div className="nav-header">
        <img src={img} alt="" />
        <h2 className='logo-name'>Bs.Trắng</h2>
        <button className="btn toggle-btn" onClick={openSideBar}><FaBars/></button>
      </div>
      </Link>
      
      <ul className={isSideBarOpen ? "nav-links show-links":"nav-links"}>
        {isSideBarOpen && <button id="close-btn"onClick={closeSideBar} className='btn' >
          <FaTimes/></button>}
        <li>
        <Link to='/about'>
        <button onClick={closeSideBar} className="btn link-btn">
            về chúng tôi
          </button>
          </Link>  
          </li>
          <li>
            <Link to='/contact'>
            <button onClick={closeSideBar} className="btn link-btn">
            liên hệ
          </button>
            </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
