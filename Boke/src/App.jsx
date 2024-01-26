import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Articulos from "./Components/Articulos";
import Historia from "./Components/Historia";
import { Link as RouterLink } from "react-router-dom"; 
import Whatsapp from "./Components/Whatsapp";
import Footer from './Components/Footer';



import { ThreeCircles } from 'react-loader-spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);   

  return (
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
          <Banner/>
          <Articulos/>
          <Historia/>
          <Whatsapp/>
          <Footer/>

        </div>
      )}
    </>
  );
};

export default App;