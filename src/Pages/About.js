import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import AboutContent from '../Components/AboutContent'
import Hobbies from '../Components/Hobbies'
const About = () => {
  return (
<>
<Nav/>
<Hero2 heading="ABOUT US" text="Im Friendly Front-End Developer "/>
<AboutContent/>
<Hobbies/>
<Footer/>
</>
    )
}

export default About