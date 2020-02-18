import React, { useState, useEffect } from 'react';

import Hexagon from '../Partials/Hexagon/index';

import 'intersection-observer';

import './main.scss';

const Main = ({props}) => {

    let ref = React.createRef();

    const isElementInViewport = (el) => {
        let rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
            rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
        );
    }

    const observer = new IntersectionObserver(
        ( [entry] ) => {

            if( entry.intersectionRatio === 1 ){
                entry.target.classList.add( "in-view" );
            }
        },
        {
            root: null,
            rootMargin : '0px',
            threshold: 1.0
        }
    );

    useEffect(() => {

        let checkInViewPort = () => {
            [...ref.current.childNodes].map( item => {

            // // if( isElementInViewport( item ) ){
            // //     item.classList.add( "in-view" );
            // // }

            observer.observe(item);
            });
        };

        window.addEventListener( 'DOMContentLoaded', checkInViewPort );
        window.addEventListener( 'touchmove' , checkInViewPort );
        window.addEventListener( 'scroll', checkInViewPort );

    }, []);
    return(
        <main className="main max-width text" id="main">
        <div ref={ref} className="main-parent-container">
            {props.content.map( (item, i) => {
               return(
               <div key={`main__${i}`} className="main-parent hexagon-container">
                    {item.heading ? <h3 className="hexagon-container-heading">{item.heading}</h3> : '' }
                    {item.preamble ? <div className="hexagon-container-preamble">{item.preamble}</div> : '' }
                    {item.hexagonContent.map( (hexagon,i) => {
                        return <Hexagon key={`hexagon__${i}`} hexagon={hexagon} />
                    })}
                </div>
                )
            })}
        </div>
    </main>
    )
}

export default Main;