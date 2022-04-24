import './styleTituloCard.css'

import React from 'react'
import circuloCard from '../../../assets/circuloCard.jpg'

function TituloCard({titulo}) {


    return (
        <div>
            <img src={circuloCard} alt="" />
            <div className='content'>
                {titulo}
            </div>
        </div>
    )
}

export default TituloCard