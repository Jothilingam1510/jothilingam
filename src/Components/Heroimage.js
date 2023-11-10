import React from 'react'
import './HeroimageStyle.css'
import me from '../images/me.jpg'
import { Link } from 'react-router-dom'
const Heroimage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={me}
            alt='introimg'/>
            </div>
            <div className='content'>
            <p>HI,I'M A SOFTWARE ENGINEER</p>
            <h1><span>R</span>EACT <span>DE</span>VELOPER</h1>
            <div>
                <Link to='/Project' className='btn'>PROJECT</Link>
                <Link to='/Contact' className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Heroimage