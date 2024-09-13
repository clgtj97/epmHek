import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import Menu from "./menu";
import imageOne from '../../images/lamb.jpg'


const Nosotros = () => {


  return (
    <div className="card">
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@500&display=swap"></link>

        <div className="columns textCoFir  has-text-centered is-vcentered position-relative">
            <div className="textMobileCon column is-4 ">
                <img src={imageOne} className="imgConFir"></img>
            </div>
            <div className="textCoFir column is-8 px-6">
                <p className="title is-2 colorTex"  >
                ¡Contáctanos a tu manera preferida! Ya sea por Facebook o WhatsApp, nuestros representantes están listos para recibir tus mensajes y ayudarte a cotizar la parte que estás buscando. ¡Estamos aquí para ti en Express Parts Mexico! 
                </p>
            
                <Link to="https://wa.me/546647232506?text=Bienvenido%20a%20Express%20Parts%20Mexico,%20que%20parte%20buscas?">
                    <button class="button is-primary mb-3">
                        @Whats App
                    </button>
                </Link>
                <Link to="https://www.facebook.com/marketplace/item/308065295323620/?mibextid=6ojiHh">
                    <button class="button is-info">
                        @Facebook
                    </button>
                </Link>
                
            </div>
        </div>



        <div className="navbarPo">
        <Menu />
        </div>
    </div>
  );
};

export default Nosotros;
