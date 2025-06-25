import { JSX, useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  D: number;
  H: number;
  M: number;
  S: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { D: 0, H: 0, M: 0, S: 0 };

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Check if countdown is completed
      if (newTimeLeft.D === 0 && newTimeLeft.H === 0 && newTimeLeft.M === 0 && newTimeLeft.S === 0) {
        setIsCompleted(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { key: 'D', label: 'DÍAS', value: timeLeft.D },
    { key: 'H', label: 'HORAS', value: timeLeft.H },
    { key: 'M', label: 'MINUTOS', value: timeLeft.M },
    { key: 'S', label: 'SEGUNDOS', value: timeLeft.S },
  ];

  if (isCompleted) {
    return (
      <div className="text-center mt-8">
        <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg shadow-lg p-8">
          <div className="text-4xl mb-4">🎉</div>
          <p className="font-cormorant-garamond text-3xl font-bold text-gray-800 mb-2">
            ¡ES HOY!
          </p>
          <p className="font-cormorant-garamond text-xl text-gray-600">
            El gran día ha llegado
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {/* Desktop Version */}
      <div className="hidden md:flex justify-center items-center space-x-6">
        {timeUnits.map((unit, index) => (
          <div key={unit.key} className="flex items-center">
            <div className="text-center group">
              <div className="relative">
                {/* Main container */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl shadow-lg p-6 w-24 h-24 flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-brown-medium group-hover:-translate-y-1">
                  <span className="font-cormorant-garamond text-3xl font-bold text-gray-800">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
              
              <span className="font-cormorant-garamond text-sm font-semibold text-gray-600 mt-3 block tracking-wider">
                {unit.label}
              </span>
            </div>
            
            {/* Separator */}
            {index < timeUnits.length - 1 && (
              <div className="text-gray-400 text-2xl font-light mx-4">:</div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          {timeUnits.map((unit) => (
            <div key={unit.key} className="text-center group">
              <div className="relative">
                {/* Main container */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-brown-medium group-hover:-translate-y-1">
                  <span className="font-cormorant-garamond text-2xl font-bold text-gray-800 block">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
              
              <span className="font-cormorant-garamond text-xs font-semibold text-gray-600 mt-2 block tracking-wider">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Urgency indicators */}
      {timeLeft.D <= 30 && timeLeft.D > 7 && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-cormorant-garamond">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            ¡Menos de un mes!
          </div>
        </div>
      )}

      {timeLeft.D <= 7 && timeLeft.D > 0 && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-orange-50 border border-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-cormorant-garamond">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
            ¡Menos de una semana!
          </div>
        </div>
      )}

      {timeLeft.D === 0 && timeLeft.H <= 24 && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-cormorant-garamond animate-pulse">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            ¡Últimas horas!
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;