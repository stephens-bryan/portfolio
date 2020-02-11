/**
 * 
 * COMPONENTS
 * 1.) Top Body Border
 * 2.) Header
 * 3.) Section - Overlay (About me)
 * 4.) Main - Langauges (Currently)
 * 5.) Section - Overlay (Services)
 * 6.) Footer
 */

import React, { Fragment } from 'react';


import TopBorder from './components/TopBorder/index';
import Header from './components/Header/index';
import IntroHero from './components/IntroHero/index';
import Overlay from './components/Overlay/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';

import './configs/config-styles.scss';
import './App.scss';

const App = () => {
    
    return(
        <div>
            <TopBorder />
            <Header />
            <IntroHero />
            <Overlay />
            <Main />
            <Overlay />
            <Footer />
        </div>        
    );
};

export default App;