import './styleImagen1.css'

import React from 'react'
import image1 from '../../assets/img/img5.JPEG'

function Imagen1() {
    return (
        <div className='containerImg1'>
            <img src={image1} alt="imagen 1" className='img1' />
        </div>
    )
}

export default Imagen1