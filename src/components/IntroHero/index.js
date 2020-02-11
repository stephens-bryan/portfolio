import React from 'react';
import './main.scss';

const IntroHero = () => {
    return(
        <section className="intro max-width">
        <div className="intro_hero__title">
            <p>I’m a Web Developer living in Toronto, Canada. I build web accessbile applications</p>
            <p>Have a Question?</p>
            <p>Reach me at
                <a href="mailto:contact@bryanstephens.ca">contact@bryanstphens.ca</a>
            </p>
            <div>
                <a href="#!">
                    <svg className="bounce clickable" width="33" height="30" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="0.645,10.383 16,23.871 31.355,10.383 29.375,8.129 16,19.878 2.625,8.129 ">
                        </polygon>
                    </svg>
                    <small className="hidden">
                        Jump to next section
                    </small>
                </a>
            </div>
        </div>
    </section>
    );
}

export default IntroHero;