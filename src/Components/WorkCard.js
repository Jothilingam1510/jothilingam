import React from 'react'
import './WorkCard.css'
// import pro1 from '../images/download.jpg'
import { NavLink } from 'react-router-dom'
const WorkCard = (props) => {
  return (
    <>
     <div className='project-card'>
                <img src={props.imgsrc} alt='img'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to="https://github.com/Jothilingam1510" className="btn">
                            View
                            </NavLink>
                        <NavLink to="https://github.com/Jothilingam1510" className="btn">
                            Source
                            </NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default WorkCard