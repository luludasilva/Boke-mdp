// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Catalogo from './Components/Catalogo';
import DetallesMochila from './Components/DetallesMochila'; // Agregamos el nuevo componente DetalleProducto
import Nav from "./Components/Nav";
import Whatsapp from "./Components/Whatsapp";
import { ThreeCircles } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <div className="bg-yellow-600 h-[100vh] full-view flex justify-center items-center">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#991b1b"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/detalle/:categoria/:id" element={<DetallesMochila />} />
              {/* Agrega otras rutas según sea necesario */}
            </Routes>
            <Whatsapp />
          </div>
        )}
      </>
    </Router>
  );
};

export default App;

