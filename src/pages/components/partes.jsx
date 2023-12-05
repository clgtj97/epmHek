import React from 'react';
import { Link } from 'gatsby';
import imgOne from "../../images/mercedezFB.webp";
import imgTwo from "../../images/jeepParts.jpeg";
import imgTre from "../../images/hondaFB.jpeg";
import Menu from "./menu";
import FooterMain from './footerMain';

const Partes = () => {
  const marginPar = {
    marginTop: '7.5%'
  }
  return (
    <div>
      <Menu/>
      <div class="columns has-text-centered" style={marginPar}>
        <div class="column">
          <div className="card">
            <div className="card-image px-5">
                <img src={imgOne} />
            </div>
            <div className="card-content has-text-centered">
            <div className="buttoColW button is-info is-outlined">
              <Link to="/components/parAgen" >
                  <p className="buttColText">Partes de Agencia</p>
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div class="column">
        <div className="card">
            <div className="card-image px-5">
                <img src={imgTwo} />
            </div>
            <div className="card-content">
              <div className="buttoColW button is-info is-outlined">
                <Link to="/components/parTaiw" >
                    <p className="buttColText">Partes Taiwanesas</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
        <div className="card">
            <div className="card-image px-5">
                <img src={imgTre} />
            </div>
            <div className="card-content">
              <div className="buttoColW button is-info is-outlined">
                <Link to="/components/parUsadas">
                    <p className="buttColText">Partes Usadas de Agencia</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns partesFoot">
        <FooterMain />
      </div>
    </div>
  );
};

export default Partes;  