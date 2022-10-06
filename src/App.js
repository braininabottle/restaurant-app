import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Carta from './views/Carta'
import Contacto from './views/Contacto'
import Ubicacion from './views/Ubicacion'
import Reserva from './views/Reserva'


function App() {

  return (
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Carta' element={<Carta/>} />
      <Route path='/Contacto' element={<Contacto/>} />
      <Route path='/Ubicacion' element={<Ubicacion />} />
      {/* <Route path='/Reserva' element={<Reserva />} /> */}
   </Routes>
  );
}

export default App;
