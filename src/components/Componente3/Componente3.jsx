import './styleComponente3.css'

import React from 'react'

function Componente3() {
  return (
    <div className='componente3'>
        <div>
            <h4 className='tituloComponente3'>Playlist</h4>
        </div>
        <div>
            <h5 className='textoPlaylist'>Ayudame a hacer la playlist de mi fiesta con las canciones que creas infaltables para bailar</h5>
        </div>
        <div className='sectionBotonSpotify'>
          <a href='https://open.spotify.com/playlist/503lUO38JjWqrzD4uibwRW?si=db0ee85b4d404e91&pt=961003b4664d1e032f906bf05310deed' target='_blank' rel="noreferrer" >
            <button className='botonSpotify'> Spotify </button>
          </a>
        </div>
    </div>
  )
}

export default Componente3
