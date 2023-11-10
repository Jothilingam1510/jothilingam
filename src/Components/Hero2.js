import React, { Component } from 'react'
import './Hero2.css'


class Hero2 extends Component  {
  render(){
    return (
<>
<div className='hero-img'>
    <div className='heading'>
        <h1>{this.props.heading}</h1>
        <h4>{this.props.text}</h4>
    </div>
</div>
</>
    )
  }
}

export default Hero2