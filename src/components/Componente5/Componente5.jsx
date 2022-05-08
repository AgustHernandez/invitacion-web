import './styleComponente5.css'
import React from 'react'
import { getFirestore, doc,getDoc  } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {firebase} from '../../firebase/config.js'
import { useParams } from 'react-router-dom';

function Componente5() {
  const [loading, setLoading] = useState(true)
  const [family, setFamily] = useState({ 'name': 'testName' })
  const {familyId} = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db,"families",familyId);
    getDoc(docRef)
    .then(resp => setFamily(resp.data()))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  })
  
  return (
    <div className='componente5'>
          <div>
            {
              !loading  && 
              <div>
                <div>
                  <h4 className='tituloComponente5'>Hola, {family.name} Confirmá tu asistencia acá</h4>
                </div>
                <div>
                <h5 className='textoAsistencia'> Te pido que me confirmes por las personas <br/> que aparecen en el formulario. </h5>
                <li className='textoAsistencia'> {family.name} </li>
                  {family.members.map(m => (<li key={m.name} className='textoAsistencia'>{m.name}</li>))}
                </div>
                <div className='sectionBotonAsistencia'>
                <button className='botonAsistencia'> Confirmar asistencia </button>
                </div>
              </div>
            }
          </div>
    </div>
  )
}

export default Componente5