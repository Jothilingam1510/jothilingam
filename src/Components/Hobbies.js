import React from 'react'
import jo from '../images/jo.png'
import './Hobbies.css'
const Hobbies = () => {
  return (
<>
<div className='abouts'>
   
    <div className='rights'>
        <div className='img-containers'>
            <div className='img-stacks tops'>
                <img src={jo} className='imgss'  alt='true'/>
            </div>
           
        </div>   
    </div>
    <div className='abouttitle'>
        <p>About Me</p>
        <div className='para'>Hi, Im Jothilingam.P ,Im coming from vallioor ,Tirunelveli ,TamilNadu.I Completed My Higher Studies in Vivekananda Kendra vidyalaya
            And I Completed My Bachelor Degree In Rohini College Of Engineering with Specialized in Computer Science Engineering , And I Completed An Intership for 4 months as React Developer and I also Learned All the Front-End Developement All languages Like HTML, CSS, JAVASCRIPT, REACTJS, MYSQL, PYTHON  etc
            My Hobbies are Reading Books ,Playing outdoor Games And My Strength Is a workholic person  </div>
        
    </div>
</div>
</> 
)
}

export default Hobbies