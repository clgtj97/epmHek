import React from 'react'
import { Link } from "gatsby"
import "./layout.css"
import "../mystyles.scss"
import imgone from "../../images/diamNameLogo.png"

const TitleMain = () => {
  return (
    <header>
      <div className="block">
        <Link to="/" >
          <img src={imgone} alt="imgone" className="mainLogo"  />
        </Link >
      </div>
    </header>
  )
}

export default TitleMain