import './styleComponente4.css'

import React from 'react'

function Componente4() {
  return (
    <div className='componente4'>
        <div>
            <h4 className='tituloComponente4'>Regalo</h4>
        </div>
        <div>
            <h5 className='textoRegalo'>No hace falta que me hagas ningún regalo, pero en caso que quieras hacerlo, te dejo un link !</h5>
        </div>
        <div className='sectionBotonRegalo'>
          <a href='https://linktr.ee/xvjaz' target='_blank' rel="noreferrer" >
            <button className='botonRegalo'>Regalar</button>
          </a>
        </div>
    </div>
  )
}

export default Componente4