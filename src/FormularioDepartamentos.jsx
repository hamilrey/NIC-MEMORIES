import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './App.css'

// Lista de departamentos de Nicaragua
const departamentos = [
  'Boaco',
  'Carazo',
  'Chinandega',
  'Chontales',
  'Estelí',
  'Granada',
  'Jinotega',
  'León',
  'Madriz',
  'Managua',
  'Masaya',
  'Matagalpa',
  'Nueva Segovia',
  'RACCN (Región Autónoma de la Costa Caribe Norte)',
  'RACCS (Región Autónoma de la Costa Caribe Sur)',
  'Río San Juan'
];

function FormularioDepartamentos() {
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('');

  const manejarCambio = (event) => {
    setDepartamentoSeleccionado(event.target.value);
  };

  return (
    <div className="formulario-departamentos">
      <FormControl fullWidth>
        <InputLabel id="label-departamento">Departamento/Región</InputLabel>
        <Select
          labelId="label-departamento"
          id="select-departamento"
          value={departamentoSeleccionado}
          label="Departamento/Región"
          onChange={manejarCambio}
        >
          {departamentos.map((nombre, indice) => (
            <MenuItem key={indice} value={nombre}>
              {nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FormularioDepartamentos;
