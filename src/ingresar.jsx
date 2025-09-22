import './App.css';
import { useNavigate } from 'react-router-dom';
function Ingresar() {
  const navigate = useNavigate();
  return (
    <div className="login-form">
      <h2>Iniciar sesión</h2>
      <div className="input-group">
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          placeholder="NicMemories@gmail.com"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="********"
        />
      </div>
      <button className="continue-button"  onClick={() => navigate('/principal')}>continuar</button>
      <div className="signup-link">
        <span>¿No tienes una cuenta?</span>
        <a href="#" onClick={e => {e.preventDefault(); navigate('/registrarse');}}>Registrarse</a>
      </div>
    </div>
  );
}

export default Ingresar;

