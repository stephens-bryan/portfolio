import React, { Fragment } from 'react';
import './main.scss';

const Header = () => {
    return(
        <header className="header max-width">
            <div>
                <h1>Bryan Stephens</h1>
                <h2>Web developer</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="mailto:contact@bryanstephens.ca">contact@bryanstephens.ca</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;