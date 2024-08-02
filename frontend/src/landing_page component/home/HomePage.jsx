import React from 'react';
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Hero from "./Hero";
import Education from './Education';

import OpenAccount from "../OpenAccount";
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';



function HomePage(){
    return(
        <>

            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
            
        </>
    )
}

export default HomePage;