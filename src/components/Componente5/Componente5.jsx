import './styleComponente5.css'

import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import ComponenteAsistencia from '../ComponenteAsistencia/ComponenteAsistencia'
import React from 'react'
import {firebase} from '../../firebase/config.js'
import { useParams } from 'react-router-dom';

function Componente5() {
  const [confirma, setConfirma] = useState(false)
  const {familyId} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db,"families", familyId);
    if(!confirma)
    {
      getDoc(docRef)
        .then(resp => setConfirma(resp.data().confirm))
        .catch(err => console.log("ComponenteAsistencia - Error: "+err))
    }
})

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
            <div className='sectionBotonAsistencia'>
                <div>
                    <h5 className='textoAsistencia'> Te pido que me confirmes asistencia por las personas que aparecen en el formulario y su tipo de alimentación. </h5>
                </div>
                <div>
                  <button className='botonAsistencia' onClick={asistencia} > Confirmar asistencia </button>
                </div>
            </div>
          }
    </div>
  )
}

export default Componente5