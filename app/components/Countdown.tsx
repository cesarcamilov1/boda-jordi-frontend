import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const countdown = () => {
      const targetDate = new Date("December 13, 2025 16:00:00").getTime();
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff < 0) {
        setTimeLeft("¡Ya llegó el gran día!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `<span>${days} días</span> <span>${hours} horas</span> <span>${minutes} minutos</span> <span>${seconds} s</span>`
      );
    };

    countdown(); // Mostrar de inmediato
    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval); // Limpiar al desmontar
  }, []);

  return (
    <div
      className="contador-boda"
      dangerouslySetInnerHTML={{ __html: timeLeft }}
    ></div>
  );
}