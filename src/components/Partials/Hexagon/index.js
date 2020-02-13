import React from 'react'

const Hexagon = ({imgSrc, imgTitle, imgAlt, helperText}) => {
    return(
        <div className="hexagon">
            <img
                src={imgSrc}
                title={imgTitle}
                alt={imgAlt}
            />
            <small className="hexagon-helper-text">
                {helperText}
            </small>
        </div>
    );
}

export default Hexagon;