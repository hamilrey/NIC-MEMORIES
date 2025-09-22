import { useNavigate } from 'react-router-dom';
import './App.css'


function Registrarse() {
     const navigate = useNavigate();
    return(
        <div className='registrarse'>
        <h2>Registrarse</h2>
        <div className='input'>
            <label htmlFor='nombre'>Nombre</label>
            <input type='text' id='nombre' placeholder='Juan carlos' />
        </div>
           <br />
        <div className='input'>
            <label htmlFor='apellido'>Apellido</label>
            <input type='text' id='apellido' placeholder='Lopez Garcia'></input>
        </div>
           <br />
        <div className='input'>
            <label htmlFor='Departamento/Región'>Departamento/Región</label>
            <input type='text' id='Departamento/Región' placeholder='Siuna / RACCN'></input>
        </div>
           <br />
        <div className='input'>
            <label htmlFor='email'>Correo</label>
            <input type='email' id='email' placeholder="NicMemories@gmail.com"></input>     
        </div>
           <br />
        <div className='input'>
            <label htmlfor='password'>Contraseña</label>
            <input type='password' id='password' placeholder='********'></input>
        </div>
           <br />
        <div className='input'>
            <label htmlfor='confirmar contraseña'>Confirmar Contraseña</label>
            <input type='password' id='confirmar contraseña' placeholder='********'></input>
        </div>
        <br />
        <button className='continuar-button' onClick={() => navigate('/principal')}>Continuar</button>
        </div>
    )

}
export default Registrarse;