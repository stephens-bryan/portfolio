import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './main.scss';

const Overlay = (props) => {
    
    const isServices = () => {
        return props.props.services === true ? "text-overlay services" : "text-overlay";
    }

    return(
        <section className="max-width text component override-top" id={props.props.heading.replace(/\s+/g, '')}>
            <div className="main-parent-container overlay-container">
                <h3 className="overlay-container-heading">{props.props.heading}</h3>
                <div className="overlay-inner-container">
                    <img className="img-overlap" src={props.props.img.src} alt={props.props.img.alt} />
                    <div className={isServices()}>
                        {props.props.content.map((content, i) => {
                            return(
                                <Fragment key={i}>
                                {content.heading ? <h4>{content.heading}</h4>: ''}
                                <p >{ReactHtmlParser(content.text)}</p>
                                </Fragment>
                            );

                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Overlay;