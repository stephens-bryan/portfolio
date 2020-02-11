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

import Header from './components/Header';
import IntroHero from './components/IntroHero';
import Overlay from './components/Overlay';
import Main from './components/Main';
import Footer from './components/Footer';

import './configs/config-styles.scss';

const App = () => {
    
    return(
        <div>
            <hr />
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