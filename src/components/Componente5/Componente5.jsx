import './styleComponente5.css'

import ComponenteAsistencia from '../ComponenteAsistencia/ComponenteAsistencia'
import React from 'react'
import { useState } from 'react'

function Componente5() {
  const [confirma, setConfirma] = useState(false)

  const asistencia = () => {
    setConfirma(true)
  }

  return (
    <div className='componente5'>
          <div>
            <h4 className='tituloComponente5'>Confirmá tu asistencia acá</h4>
          </div>
          {
            confirma ?
              <div>
                <ComponenteAsistencia/>
              </div>
            :
            <div>
                <div>
                    <h5 className='textoAsistencia'> Te pido que me confirmes por las personas <br/> que aparecen en el formulario. </h5>
                </div>
                <div className='sectionBotonAsistencia'>
                  <button className='botonAsistencia' onClick={asistencia} > Confirmar asistencia </button>
                </div>
            </div>
          }
    </div>
  )
}

export default Componente5