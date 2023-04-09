import React from 'react'
import "./layout.css"
//import slideOne from '../../images/diamBack32.jpg';
//import slideTwo from '../../images/diamBack2.jpg';
import vidSlideTwo from '../../assets/mainCustom.mp4'

const SlidersSecond = () => {
  return (
    <div>
        <div className="shadowTwo">
                <div className="textUp" >Repairs & Detailing</div>
                <div className="slideSecond">
                    {/*<img src={slideTwo} alt="slideTwo" />*/}
                    <video autoPlay muted loop>
                        <source src={vidSlideTwo} type="video/mp4" />
                    </video>
                </div>
        </div>
    </div>
    
  )
}

export default SlidersSecond