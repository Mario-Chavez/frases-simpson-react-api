import { Button, Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/logosimpson.png"
import Frase from './components/Frase';
import { useEffect, useState } from 'react';

function App() {
  const [personaje, setPersonaje] = useState({})
  
  useEffect(() => {
   consultarApi(); 
  }, [])
  
  const consultarApi = async()=>{
   /* realizamos una peticion get a la API */
   try {
   const resp = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
   const dato = await resp.json()   
  //  console.log(dato[0]);
   setPersonaje(dato[0])
   } catch (error) {
     console.log(error);  
   }
  }

  return (
    <>
    <Container>
      <img src={logo} alt="logo simpson" className='w-50'/>
     <Frase personaje={personaje} />
     <Button variant='danger'>Obtener frase</Button>
    </Container>
    </>
  )
}

export default App
