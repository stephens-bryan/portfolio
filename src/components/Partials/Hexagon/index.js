import React from 'react'

const Hexagon = ({hexagon}) => {
    return(
        <div className="hexagon">
            <img
                src={hexagon.imgSrc}
                title={hexagon.imgTitle}
                alt={hexagon.imgAlt}
            />
            <small className="hexagon-helper-text">
                {hexagon.helperText}
            </small>
        </div>
    );
}

export default Hexagon;