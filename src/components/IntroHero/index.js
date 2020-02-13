import React, { useState, useEffect } from 'react';
import './main.scss';

const IntroHero = () => {

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        let handleResize = () => {
            setHeight(window.innerHeight);
        }
        window.addEventListener( 'DOMContentLoaded', handleResize );
        window.addEventListener( 'resize', handleResize );

    }, []);

    const jumpLink = () => (
        window.scrollTo({
            top: window.innerHeight + 100,
            behavior: 'smooth'
        })
    );

    return(
        <section className="intro max-width">
            <div className="intro_hero__title" style={{height: height}}>
                <p>I’m a Web Developer living in Toronto, Canada. I build web accessbile applications</p>
                <p>Have a Question?</p>
                <p>Reach me at
                    <a href="mailto:contact@bryanstephens.ca"> contact@bryanstphens.ca</a>
                </p>
                <div>
                    <svg onClick={jumpLink} className="bounce clickable" width="33" height="30" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0.645,10.383 16,23.871 31.355,10.383 29.375,8.129 16,19.878 2.625,8.129 ">
                            </polygon>
                        </svg>
                        <small className="hidden">
                            Jump to next section
                        </small>
                </div>
            </div>
        </section>
    );
}

export default IntroHero;