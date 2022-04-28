import './styleReloj.css';

import React, { useEffect, useState } from 'react'

function Reloj({ deadline }) {
  const [dias, setDias] = useState(0)
  const [horas, setHoras] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [segundos, setSegundos] = useState(0)

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  }

  const getTimeUntil = (deadline) => {
    const tiempo = Date.parse(deadline) - Date.parse(new Date());
    if (tiempo < 0) {
      setDias(0);
      setHoras(0);
      setMinutos(0);
      setSegundos(0);
    } else {
      setDias(Math.floor(tiempo / (1000 * 60 * 60 * 24)));
      setHoras(Math.floor((tiempo / (1000 * 60 * 60)) % 24));
      setMinutos(Math.floor((tiempo / 1000 / 60) % 60));
      setSegundos(Math.floor((tiempo / 1000) % 60));
    }
  }

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline])

  return (
    <div>
      <div className='containerCrono'>
        <h4 className="Clock-days">{leading0(dias)}</h4>
        <h4 className="Clock-hours">{leading0(horas)}</h4>
        <h4 className="Clock-minutes">{leading0(minutos)}</h4>
        <h4 className="Clock-seconds">{leading0(segundos)}</h4>
      </div>
      <div className='containerTitulos'>
        <h4>Días</h4>
        <h4>Horas</h4>
        <h4>Min.</h4>
        <h4>Seg.</h4>
      </div>
    </div>
  )
}

export default Reloj