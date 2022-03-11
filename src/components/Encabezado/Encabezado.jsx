import React from 'react'
import ParrafoEncabezado from '../ParrafoEncabezado/ParrafoEncabezado';
import './styleEncabezado.css';

function Encabezado() {
  return (
    <div>
        <h1 className='nombre'>Jazmín</h1>
        <p className='fecha'>13-08-2022</p>
        <ParrafoEncabezado/>
        <h2 className='quince'>Mis 15 años</h2>
    </div>
  )
}

export default Encabezado