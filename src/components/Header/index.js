import React, { useState, useEffect } from 'react';
import './main.scss';

const Header = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        let handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener( 'DOMContentLoaded', handleResize );
        window.addEventListener( 'resize', handleResize );

    }, []);

    const setVisibility = () => {
        if( width < 750 ){
            return "hidden";
        } else if (width > 750){
            return "";
        }
    }

    setVisibility();

    return(
        <header className="header max-width">
            <div>
                <h1>Bryan Stephens</h1>
                <h2>Web developer</h2>
            </div>
            <nav>
                <ul>
                    {/* <li>
                        <a href="#">Projects</a>
                    </li> */}
                    <li className={setVisibility()}>
                        <a href="mailto:contact@bryanstephens.ca">contact@bryanstephens.ca</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;