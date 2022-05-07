import './styleComponente5.css'
import React from 'react'
import { collection, getDocs, getFirestore,query } from 'firebase/firestore'
import { useEffect, useState } from 'react'


function Componente5() {
  const [loading, setLoading] = useState(true)
  const [family, setFamily] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'families')
    //const queryFilter = query( queryCollection, "k553gc8vmxNEZcgAoxJY")
    getDocs(queryCollection)
    .then(resp => setFamily(resp.docs[0].data()))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  })
  
  return (
    <div className='componente5'>
        <div>
            <h4 className='tituloComponente5'>Hola, {family.name} Confirmá tu asistencia acá</h4>
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