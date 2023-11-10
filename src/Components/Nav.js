import React, { useState } from 'react'
import './Nav.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Nav = () => {
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  const [color,setColor]=useState(false)
  const changeColor =()=>{
    if(window.scrollY >=100){
      setColor(true)
    }else{
      setColor(false)
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
    <>
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <p className=' jo'><span>JO</span>THILINGAM.P</p>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Project'>Project</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          { click ? (<FaTimes size={25} style={{color:"white"}}/>) : (   <FaBars size={25} style={{color:"white"}}/>)}
       
        </div>
    </div>
    </>
  )
}

export default Nav