import React , {useState} from 'react';

const Formulario = ({comparar}) => {

    const [numero, setNumero] = useState('');

    const RevisarNumero = () =>{
        comparar(numero);
    }

    const ActualizarValorNumero = (e) =>
    {
        setNumero(e.target.value)
    }

    return (
       <section className="left">
            <input type="number" value={numero} className="guess" onChange={ActualizarValorNumero} />
            <button onClick={RevisarNumero} id='btnAdivinar' className="btn check">Adivinar!</button>
       </section>


    );
};

export default Formulario;