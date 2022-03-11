import React from 'react'
import Reloj from '../../Components/Reloj/Reloj'

function ContainerReloj() {
    
    const deadline = "august, 13, 2022";

  return (
    <div>
        <h3>¿Cuanto falta?</h3>
        <Reloj deadline={deadline}/>
    </div>
  )
}

export default ContainerReloj