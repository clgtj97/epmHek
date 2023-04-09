import React from 'react'
import imgone from "../../images/diamNameLogo.png"
import "../mystyles.scss"

const Menu = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a href="none" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="none">
        Watches
      </a>

      <a className="navbar-item" href="./components/grillzMain">
        Gold Grillz
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="none">
          Jewelry
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" href="none">
            Chains
          </a>
          <a className="navbar-item" href="none">
            Bracelets
          </a>
          <a className="navbar-item" href="none">
            Rings
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item" href="none">
            Custom Piece 
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-orange" href="none">
            <strong>Custom Pieces</strong>
          </a>
          <a className="button is-light" href="none">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Menu