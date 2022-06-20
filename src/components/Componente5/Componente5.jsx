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
      getDoc(docRef)
      .then(resp => setConfirma(resp.data().confirm))
      .catch(err => console.log("ComponenteAsistencia - Error: "+err))
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