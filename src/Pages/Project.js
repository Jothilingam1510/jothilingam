import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import PriceCard from '../Components/PriceCard'
import Work from '../Components/Work'
const Project = () => {
  return (
<>
<Nav/>
<Hero2 heading="PROJECT." text="Some of My Most Recent Works"/>
<Work/>
<PriceCard/>
<Footer/>
</>
    )
}

export default Project