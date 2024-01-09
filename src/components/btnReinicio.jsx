import React from "react";

const btnreinicio = ({reiniciar}) => {
    return(
        <div>
            <button onClick={reiniciar} className="btn again">Reiniciar!</button>
        </div>
    )
}
export default btnreinicio;