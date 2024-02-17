// Home.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Banner";
import Articulos from "./Articulos";
import Historia from "./Historia";
import Clientes from "./Clientes";
import Temporada from "./Temporada";
import DetallesMochila from "./DetallesMochila";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="/">
      <Banner />
      <Routes>
        <Route path="/" element={<Articulos />} />
        <Route path="/detalles-mochila" element={<DetallesMochila />} />
        {/* Agrega otras rutas según sea necesario */}
      </Routes>
      <Temporada />
      <Historia />
      <Clientes />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Home;
