import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Ingresar from './ingresar.jsx'
import Registrarse from './registrarse.jsx';
import Principal from './principal.jsx';
import Biblioteca from './biblioteca.jsx';
import Calendario from './calendario.jsx';
import './App.css'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="nicoLogo">
        <img src='https://i.pinimg.com/736x/e0/1d/3f/e01d3f73d8e42ce60145535595b2a810.jpg' alt="logo" />
      </div>
      <div className='contenedor'>
        <div className="linea"></div>
        <span>Deja tu huella y haz eterna la memoria de nuestro pueblo</span>
        <button onClick={() => navigate('/ingresar')}>Comenzar</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}

function Api(){
  const [data, setData] = useState('');
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:5000/api/data');
     const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
export default App;