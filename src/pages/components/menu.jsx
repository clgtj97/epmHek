import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import '../mystyles.scss';
import './layout.css';
import imgone from '../../images/webLogoW.jpg';

const Menu = () => {
  const [isActive, setisActive] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);


  const toggleNav = () => {
    setisActive(!isActive);
  };

  const closeMenu = () => {
    setisActive(false);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      // Check if the clicked element is inside the navbar
      if (!event.target.closest('.navbar')) {
        setisActive(false);
      }
    };

    // Add event listener to detect clicks outside the navbar
    document.addEventListener('click', closeMenuOnOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  return (
    <nav className={`mobileNavMargin navbar mx-5 is-mobile ${isActive ? 'is-active' : ''}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className={`navbar-burger burger burgerMobile ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleNav}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/components/nostros" className="navbar-item" onClick={closeMenu}>
            Nosotros
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/components/partes" className="navbar-link">
              Partes
            </Link>

            <div className="navbar-dropdown">
              <Link to="/components/parAgen" className="navbar-item" onClick={closeMenu}>
                Nuevas de Agencia
              </Link>
              <Link to="/components/parTaiw" className="navbar-item" onClick={closeMenu}>
                Nuevas Taiwanesas
              </Link>
              <Link to="/components/parUsadas" className="navbar-item" onClick={closeMenu}>
                Usadas de Agencia
              </Link>
              <hr className="navbar-divider" />
              <Link to="/components/contact" className="navbar-item" onClick={closeMenu}>
                Hacer un Pedido
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/components/pagos" className="button is-orange" onClick={closeMenu}>
                <strong>Pagos</strong>
              </Link>
              <Link to="/components/contact" className="button is-light" onClick={closeMenu}>
                Contactanos Hoy!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className={`mainLogo ${isActive ? 'is-hidden-mobile' : ''}`} onClick={closeMenu}>
        <img src={imgone} alt="imgone" className="mainLogo" />
      </Link>
    </nav>
  );
};

export default Menu;
