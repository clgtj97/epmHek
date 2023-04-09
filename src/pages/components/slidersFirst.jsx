import React from 'react'
import "./layout.css"
//import slideOne from '../../images/diamBack32.jpg';
import vidSlideOne from '../../assets/mainRepairs.mp4'

const SlidersFirst = () => {
  return (
    <div>
        <div className="shadowOne">
                <div className="textUp" >Custom Orders</div>
                <div className="slideFirst">
                    {/*<img src={slideOne} alt="slideOne" />*/}
                    <video autoPlay muted loop>
                        <source src={vidSlideOne} type="video/mp4" />
                    </video>
                </div>
        </div>
    </div>
    
  )
}

export default SlidersFirst