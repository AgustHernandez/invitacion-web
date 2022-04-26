import './styleSaludo.css'

import React from 'react'

function Saludo() {
    return (
        <div className='saludo'>
            <div className='containerTitulo'>
                <h3 className='saludoTitulo'> ¡ Te espero ! </h3>
            </div>
            <div className='containerNombre'>
                <h4 className='saludoNombre'> Jazmin </h4>
            </div>
        </div>
    )
}

export default Saludo