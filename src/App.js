import HomePage from './components/Home'
import CustomNavbar from './components/Navbar';
import Silk from './components/Silk'
import Cotton from './components/Cotton'
import Linen from './components/Linen'
import Denim from './components/Denim'
import Wool from './components/Wool'
import Homet from './components/Homet'
import Apparel from './components/Apparel'
import Tech from './components/Tech'
import HempTextiles from './components/Hemp';
import Accessories from './components/Accessories';
import Breathe from './components/Breathe';
import AerowavePolyester from './components/Aerowave';
import Ecoblend from './components/Ecoblend';
import AboutUs from './components/About';
import Footer from './components/Footer';

import PageLoader from './components/Preloader';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
 useEffect(()  =>{
  Aos.init({
  duration :800,       // animation duration in ms
  once: true,          // animate only once when element scrolls into view
  offset: 50,          // triggers animation slightly before element is in viewport
  easing: 'ease-in-out', // smooth easing
});
 },[] )


  return (
    <div>
     
      <Router>
       <PageLoader>
      <CustomNavbar />
      <Routes>
        <Route path ='/' element ={<HomePage />} />
        <Route path ='/about' element ={<AboutUs />} />
        <Route path = '/cotton' element={<Cotton />} />
         <Route path = '/linen' element={<Linen />} />
       <Route path = '/silk' element={<Silk />} />
        <Route path = '/denim' element={<Denim />} />
        <Route path = '/wool' element={<Wool />} />
        <Route path = '/homet' element={<Homet />} />
        <Route path = '/apparel' element={<Apparel />} />
        <Route path = '/tech' element={<Tech />} />
        <Route path = '/hemp' element={<HempTextiles />} />
        <Route path = '/accessories' element={<Accessories />} />
        <Route path = '/breathe' element={<Breathe />} />
        <Route path = '/aerowave' element={<AerowavePolyester />} />
        <Route path = '/ecoblend' element={<Ecoblend />} />
      </Routes>
      <Footer />
      </PageLoader>
      </Router>
      
    </div>
  );
}

export default App;
