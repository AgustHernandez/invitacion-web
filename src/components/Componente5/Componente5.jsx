import './styleComponente5.css'

import React from 'react'

function Componente5() {
  return (
    <div className='componente5'>
        <div>
            <h4 className='tituloComponente5'>Confirmá tu asistencia acá</h4>
        </div>
        <div>
            <h5 className='textoAsistencia'> Te pido que me confirmes por las personas <br/> que aparecen en el formulario. </h5>
        </div>
        <div className='sectionBotonAsistencia'>
            <button className='botonAsistencia'> Confirmar asistencia </button>
        </div>
    </div>
  )
}

export default Componente5