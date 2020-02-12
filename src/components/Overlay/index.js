import React from 'react';

import './main.scss';


/**
 * PROPS
 * - heading
 * - img
 *   - src
 *   - alt
 * - text
 *   - points
 */

const Overlay = (props) => {
    
    return(
        <section className="max-width text component override-top">
            <div className="main-parent-container overlay-container">
                <h3 className="overlay-container-heading">{props.props.heading}</h3>
                <div className="overlay-inner-container">
                    <img className="img-overlap" src={props.props.img.src} alt={props.props.img.alt} />
                    <div className="text-overlay">
                        {props.props.content.map((content, i) => {
                            return <p key={i}>{content.text}</p>;
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Overlay;