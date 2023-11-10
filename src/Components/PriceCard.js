import React from 'react'
import './PriceCard.css'
import { Link } from 'react-router-dom'
const PriceCard = () => {
  return (
<>
<div className='pricing'>
    <div className='card-container'>
        <div className='card'>
            <h3>--Basic--</h3>
            <span className='bar'></span>
            <p className='btc'> $ 100</p>
            <p>- 3 days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Not Responsive Design -</p>
            <Link to="/Contact" className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>--Intermediate--</h3>
            <span className='bar'></span>
            <p className='btc'> $ 300</p>
            <p>- 10 days -</p>
            <p>- 7 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>--Advance--</h3>
            <span className='bar'></span>
            <p className='btc'> $ 700</p>
            <p>- life time -</p>
            <p>- 10 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>PURCHASE NOW</Link>
        </div>
    </div>
</div>
</>
    )
}

export default PriceCard