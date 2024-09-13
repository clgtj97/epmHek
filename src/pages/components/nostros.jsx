import React, { useEffect, useState } from 'react';
import Menu from "./menu";
import imageOne from '../../images/jeepwMobil.jpeg'
import imageTwo from '../../images/jeepwoff.jpeg'
import FooterMain from './footerMain';

const Nosotros = () => {

  const imgConFir = {   
    width: '100%',
    borderRadius: '3%'
  }
  const colorTex = {
    color: '#0074BC'
  }

  return (
    <div>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@500&display=swap"></link>
        <div className="card">
        <div className="columns textCoFir  has-text-centered is-vcentered position-relative">
            <div className="column is-4 nosotrosMobOne">
                <img src={imageOne} style={imgConFir}></img>
            </div>
            <div className='textCoFir column is-8 px-6'>
                <p className='title is-3' style={colorTex} >En Express Parts Mexico, somos más que una tienda de piezas de autos.</p>
                <p className='title is-3' style={colorTex} > Nos dedicamos a proporcionar soluciones integrales para tus necesidades automotrices. </p>
                <p className='title is-4' style={colorTex}>
                Ya sea que estés buscando partes taiwanesas de calidad, piezas nuevas de agencia o opciones usadas, nos esforzamos por ofrecer la mejor selección respaldada por nuestro compromiso con la excelencia y la satisfacción del cliente.
                </p>
            </div>
        </div>
        </div>

        <div className="card">
        <div className="columns textCoFir has-text-centered is-vcentered">
            <div className='textCoFir column is-8 px-6 textMobileNosotros'>
                <p className='title is-4' style={colorTex} >
                    Importamos directamente de Estados Unidos a Tijuana, asegurando productos confiables con garantía.
                </p>
                <p className='title is-4' style={colorTex} >
                    Nuestro equipo está aquí para asistirte y hacer que tu experiencia sea impecable.
                </p>
                <p className='title is-2' style={colorTex}>
                    ¡Descubre la diferencia en Express Parts Mexico y deja que tu viaje continúe con confianza y calidad!"
                </p>
            </div>
            <div className="column is-4 nosotrosMobDos">
                <img src={imageTwo} style={imgConFir}></img>
            </div>
        </div>
        </div>



        <div className="navbarPo">
        <Menu />
        </div>
      <FooterMain />
    </div>
  );
};

export default Nosotros;
