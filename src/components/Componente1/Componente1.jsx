import './styleComponente1.css'

import React from 'react'

function Componente1() {

  return (
    <div className='componente1'>
        <div>
          <h4 className='tituloComponente1'>Salón</h4>
        </div>
        <div>
          <h3 className='nombreSalon'>El Castillo Eventos</h3>
        </div>
        <div>
          <h5 className='direccionSalon'>Av. Pres. Figueroa Alcorta 5575</h5>
        </div>
        <div>
          <h5 className='horario'>21 a 05 hs.</h5>
        </div>
        <div className='sectionBotonMaps'>
          <a href='https://g.page/elcastilloeventos?share' target='_blank' rel="noreferrer" >
            <button className='botonMaps'>¿ Cómo llegar ?</button>
          </a>
        </div>
    </div>
  )
}

export default Componente1