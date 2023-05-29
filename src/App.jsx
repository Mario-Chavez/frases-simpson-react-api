import { Button, Container, Spinner } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/logosimpson.png"
import Frase from './components/Frase';
import { useEffect, useState } from 'react';

function App() {
  const [personaje, setPersonaje] = useState({})
  const [mostrarSpiner, setMostrarSpiner] = useState(true)
  
  useEffect(() => {
   consultarApi(); 
  }, [])
  
  const consultarApi = async()=>{
   /* realizamos una peticion get a la API */
   try {
    setMostrarSpiner(true)
   const resp = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
   const dato = await resp.json()   
   setPersonaje(dato[0])
   setMostrarSpiner(false)
   } catch (error) {
     console.log(error);  
   }
  }

  return (
    <>
    <Container>
      <img src={logo} alt="logo simpson" className='w-50'/>
        {
          mostrarSpiner
          ? <div className='my-5'>
                <Spinner animation="border" role="status" variant='primary'>
                </Spinner> 
              </div>
          :
              <Frase personaje={personaje} />
        }
    <Button variant='danger' onClick={consultarApi}>Obtener frase</Button>
      
    </Container>
    </>
  )
}

export default App
