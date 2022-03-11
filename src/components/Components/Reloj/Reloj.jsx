import React, { useEffect, useState } from 'react'
import './styleReloj.css';


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
      <div className="Clock-days">{leading0(dias)} Days</div>
      <div className="Clock-hours">{leading0(horas)} Hours</div>
      <div className="Clock-minutes">{leading0(minutos)} Minutes</div>
      <div className="Clock-seconds">{leading0(segundos)} Seconds</div>
    </div>
  )
}

export default Reloj