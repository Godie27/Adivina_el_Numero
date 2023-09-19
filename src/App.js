// import logo from './logo.svg';
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
  //generar el numero secreto y guardarlo en una constante
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
    // setPuntajeAlto(puntajeAlto);
    if(!numero)
    {
      setMensaje("🚨 No es un numero")

    }
    else if((numero) != (numeroSecreto))
    {
      // si no coincide y tiene puntos se restan
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




        //setMensaje("😪 Numero Incorrecto ...") 
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
      

      console.log(pts)
      console.log(puntajeAlto)
      console.log(puntuacion)
      if(pts >= puntajeAlto)
      {
        setPuntajeAlto(pts)
      }
      // Si el numero si es igual
      // Se reinicia el numero
      setNumeroSecreto(GenerarNumeroSecreto)
      setMensaje("✨ Ganaste!!! ✨")
      // if(puntuacion > 99){
        //   setPuntuacion(puntuacion + 0)
        // }else if(puntuacion > 97){setPuntuacion(puntuacion + 2)}
        // else if(puntuacion > 96){setPuntuacion(puntuacion + 3)}
        // else{
        

    }

  }
  
  
  
  
  return (
    
    <div className='App'>
      
      <header>
        <h1>¡Adivina mi número!</h1>
        <p className="between">(Número entre 1 y 20)</p>
        
        {/* componente */}
        <Btnreinicio reiniciar = {ReiniciarPartida}/>

        <div className="number">?</div>
      </header>
      <main>
        <Formulario comparar = {CompararNumero}/>
        <section className='rigth'>
          {/* <Mensaje/>
          <Puntaje/>
          <Puntaje/> */}
          <Textos 
            mensajeResultado={mensaje}
            puntuacion = {puntuacion}
            puntajeAlto = {puntajeAlto}
            />
        </section>
        
      </main>
    </div>

  );
}

export default App;
