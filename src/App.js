
import './App.css';
import Btnreinicio from './components/btnReinicio';
import Formulario from './components/Formulario';
import Mensaje from './components/Textos/Mensaje';
import Puntaje from './components/Textos/puntaje';
import Textos from './components/Textos';
import { useState } from 'react';




const GenerarNumeroSecreto = () => {
  return Math.trunc(Math.random() * 20) + 1 ; 

};

function App() {

  const[numeroSecreto , setNumeroSecreto] = useState(GenerarNumeroSecreto); 
  const[mensaje , setMensaje] = useState("Empieza a Adivinar ..."); 
  const[puntuacion , setPuntuacion] = useState(0); 
  const[puntajeAlto , setPuntajeAlto] = useState(0); 


  const ReiniciarPartida = ()=>{
    console.log("Se reiniciara la partida")
    
    setNumeroSecreto(GenerarNumeroSecreto);
    setPuntuacion(0);
    setPuntajeAlto(puntajeAlto);
    setMensaje("Empieza a Adivinar ...");
  }
  

  const CompararNumero = (numero) => {
    console.log("El numero "+ numero +" se esta comparando con el numero:" + numeroSecreto)

    if(!numero)
    {
      setMensaje("🚨 No es un numero")
    }
    else if((numero) != (numeroSecreto))
    {
      // valida que sea entre 1 y 20
      if((numero) > (20))
      {
        setMensaje("🚨 Ingresa un numero correcto...")
      }
      else if((numero) < 1 ) 
      {
        setMensaje("🚨 Ingresa un numero correcto...")
      }
      else{

        if((numero) > (numeroSecreto))
        {
          setMensaje("🚨 El numero es muy Alto...")
        }
        else if((numero) < (numeroSecreto) ) 
        {
          setMensaje("🚨 El numero es muy Bajo...")
        }

        if(puntuacion > 1) 
        {
          setPuntuacion(puntuacion - 1)
        }


      }
    }
    else
    {
      let pts = puntuacion + 20
      setPuntuacion(pts)

      if(pts >= puntajeAlto)
      {
        setPuntajeAlto(pts)
      }

      setNumeroSecreto(GenerarNumeroSecreto)
      setMensaje("✨ Ganaste!!! ✨")
    }

  }   
  return (  
    <div className='App'>
        <header>
            <p className="between">(Número entre 1 y 20)</p>
            
            {/* componente */}
            <Btnreinicio reiniciar = {ReiniciarPartida}/>
          <div className='flexo'>
            <h1>¡Adivina mi número!</h1>
            <div className='numberdiv'>
              <div className="number">?</div>      
            </div>
          </div>
        </header>
        <main>
          <Formulario comparar = {CompararNumero}/>
          <section className='rigth'>
            <Textos 
              mensajeResultado={mensaje}
              puntuacion = {puntuacion}
              puntajeAlto = {puntajeAlto}
              />
          </section>      
        </main>



      <div className='espacio'>
          <p>Iconduck is a project to make open source
            icons and illustrations more accessible.
            We've started doing this by collecting and 
            tagging them, and making them searchable.
          </p>
      </div>
    </div>
      
  );

  
}

export default App;
