import './styleImagen2.css'

import React from 'react'
import image2 from '../../assets/img/img1.JPEG'

function Imagen2() {
    return (
        <div className='containerImg2'>
            <img src={image2} alt="imagen 2" className='img2' />
        </div>
    )
}

export default Imagen2