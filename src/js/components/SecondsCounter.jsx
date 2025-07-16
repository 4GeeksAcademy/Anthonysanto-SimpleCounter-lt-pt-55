import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  });

  return (
    <div>
      <h1>Contador: {seconds}</h1>
    </div>
  );
};

export default Counter;
