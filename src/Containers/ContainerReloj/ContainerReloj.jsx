import './styleContainerReloj.css'

import React from 'react'
import Reloj from '../../components/Reloj/Reloj'

function ContainerReloj() {
    
    const deadline = "august, 13, 2022";

  return (
    <div className='containerReloj'>
        <h3 className='tituloReloj'>¿Cuanto falta?</h3>
        <Reloj deadline={deadline}/>
    </div>
  )
}

export default ContainerReloj