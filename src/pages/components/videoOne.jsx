import React from 'react'
import "./layout.css"
import vidOne from '../../assets/mainGrill.mp4'

const VideoOne = () => {
  return (
    <div className="slideFor">
        <video autoPlay muted loop>
            <source src={vidOne} type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoOne