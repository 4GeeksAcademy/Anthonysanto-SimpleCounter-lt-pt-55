import React, { useEffect, useState } from "react";

const Contador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prev) => {
        if (prev >= 9) {
          return 0; // Reinicia a 0
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{segundos}</h1>
    </div>
  );
};

export default Contador;
