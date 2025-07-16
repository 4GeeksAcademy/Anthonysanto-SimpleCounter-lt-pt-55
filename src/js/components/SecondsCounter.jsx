import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const [seconds3, setSeconds3] = useState(0);
  const [seconds4, setSeconds4] = useState(0);
  const [seconds5, setSeconds5] = useState(0);
  const [seconds6, setSeconds6] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 9) {
          setSeconds2((prev2) => {
            if (prev2 >= 9) {
              setSeconds3((prev3) => {
                if (prev3 >= 9) {
                  setSeconds4((prev4) => {
                    if (prev4 >= 9) {
                      setSeconds5((prev5) => {
                        if (prev5 >= 9) {
                          setSeconds6((prev6) => prev6 + 1);
                          return 0;
                        }
                        return prev5 + 1;
                      });
                      return 0;
                    }
                    return prev4 + 1;
                  });
                  return 0;
                }
                return prev3 + 1;
              });
              return 0;
            }
            return prev2 + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-end text-light bg-secondary p-5 m-3">
      <h1>{seconds6}</h1>
      <h1>{seconds5}</h1>
      <h1>{seconds4}</h1>
      <h1>{seconds3}</h1>
      <h1 className="me-3">{seconds2}</h1>
      <h1>{seconds}</h1>
    </div>
  );
};

export default Counter;
