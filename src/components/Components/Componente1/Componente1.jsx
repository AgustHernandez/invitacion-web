import './styleComponente1.css'

import React from 'react'

function Componente1() {
  return (
    <div>
        <div>
            <h4 className='tituloContainer1'>Salón</h4>
            <h3 className='nombreSalon'>El Castillo Eventos</h3>
            <h5 className='direccionSalon'>Av. Pres. Figueroa Alcorta 5575</h5>
            <h5 className='horario'>21 a 05 hs.</h5>
        </div>
        <div>
            <button className='botonMaps'>¿ Cómo llegar ?</button>
        </div>
    </div>
  )
}

export default Componente1