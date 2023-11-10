import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react.png'
import javascript from '../images/javascript.png' 
import python from '../images/python.jpg'
import mysql from '../images/my sql.jpg'
import profeskill from '../images/professional.png'
import './Skills.css'
const Skills = () => {
  return (
    <>
    <div className=' whole'>
      <div className='text'>
        <div className=' title'>MY SKILLS</div>
        <div className='title-mini'>Technical skills</div>
     
      <img className='imageskill' src={html} alt='html'/>
      <img className='imageskill' src={css} alt='css'/>
      <img className='imageskill' src={javascript} alt='javascript'/>
      <img className='imageskill' src={react} alt='react'/>
      <img className='imageskill' src={python} alt='python'/>
      <img className='imageskill' src={mysql} alt='sql'/>
      <div className='title-mini'>Professional skills</div>
    <img className='imageprof' src={profeskill} alt='prof'/>
      </div>
    
    </div>
    

    </>
  )
}

export default Skills