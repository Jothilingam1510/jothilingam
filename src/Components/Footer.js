import React from 'react'
import './Footer.css'
import {FaHome ,FaPhone,FaMailBulk,FaFacebook,FaInstagram,FaLinkedin, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'white',marginRight:"2rem"}}/>
                    <div>
                        <h4>54 A EAST CAR STREET</h4>
                        <h4>VALLIOOR,TIRUNELVELI</h4>
                    </div>
                </div>
                <div className='phone'>
                   <h4> <FaPhone size={20} style={{color:'white',marginRight:"2rem"}}/>
                   +91 70944-13371</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'white',marginRight:"2rem"}}/>
                    jothilingam1510@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>ABOUT ME</h4>
                <h4>I am Jothilingam,Im Completed BE with Specialized in Computer Science Engineering And I also Completed Intership in React js as Front-End Developer</h4>
                <div className='social'>
                    <a href='https://www.facebook.com/'><FaFacebook size={40} style={{color:"white",marginRight:"1rem"}}/></a>
                    <a href='https://instagram.com/thenameisjo._?igshid=OTk0YzhjMDVlZA=='><FaInstagram size={40} style={{color:"white",marginRight:"1rem"}}/></a>
                    <a href='https://www.linkedin.com/in/jothilingam-p-6a158226b'><FaLinkedin size={40} style={{color:"white",marginRight:"1rem"}}/></a>
                    <a href='https://wa.link/mmsgoz'><FaWhatsapp size={40} style={{color:"white",marginRight:"1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer