import React from 'react';
import Mochilas from '../assets/Mochilas.jpg';
import Buzos from '../assets/Buzos.jpg';
import Remerones from '../assets/Remerones.jpg';
import Remeron from '../assets/Remeron.jpg';
import Camperas from '../assets/Camperas.jpg';
import Pilusos from '../assets/Pilusos.jpg';
import { Link } from "react-router-dom";


const Cards = () => {
  return (
    <section id="articulos" className="main-content py-10 bg-red-950">
      {/* Dentro de la sección de Artículos */}
      <div className="centered2">
        <h2 className="contact-heading text-center font-sans italic mb-8 text-[30px]  text-amber-600">Artesanía ancestral hecha a mano</h2>
        <div className="grid grid-cols-3 gap-8">
        <Link to="/detalles-mochila">
  <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
    <img
      src={Mochilas}
      alt="Mochilas"
      className="item-img w-full h-64 object-cover rounded-md"
    />
    <p className="text-center mt-2">Mochilas de tela</p>
  </div>
</Link>
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Buzos}
              alt="Buzos"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Buzos</p>
          </div>
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Remerones}
              alt="Remerones"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Remerones</p>
          </div>
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Remeron}
              alt="Remeron"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Remerón vestido</p>
          </div>
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Camperas}
              alt="Camperas con Capuchas"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Camperas</p>
          </div>
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Pilusos}
              alt="Pilusos"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Pilusos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;

