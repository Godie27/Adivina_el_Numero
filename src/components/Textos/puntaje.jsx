import React from 'react';

const Puntaje = ({texto , puntaje}) => {
    return (
        <p>
            {texto}: <span>{puntaje}</span>
        </p>
    );
};

export default Puntaje;