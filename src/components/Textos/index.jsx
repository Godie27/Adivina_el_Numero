import React from 'react';
import Mensaje from './Mensaje';
import Puntaje from './puntaje';


const Textos = ({mensajeResultado , puntuacion, puntajeAlto}) => {
    return (
      <section className="right">
        <Mensaje mensaje={mensajeResultado}/>
        <Puntaje texto="💯 Puntuación" puntaje={puntuacion}/>
        <hr />
        <br />
        <Puntaje texto="🥇 Puntaje mas Alto " puntaje={puntajeAlto}/>
      </section>
    );
};

export default Textos;