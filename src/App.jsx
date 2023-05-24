import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/logosimpson.png"
import Frase from './components/Frase';

function App() {
  return (
    <>
    <Container>
      <img src={logo} alt="logo simpson" className='w-50'/>
     <Frase/>
    </Container>
    </>
  )
}

export default App
