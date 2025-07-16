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
    }, 1);

    return () => clearInterval(interval);
  });

    return (
  <div className="d-flex flex-wrap justify-content-center bg-dark p-5 m-3">
      <div className="d-flex flex-column align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
          <i className="fa-regular fa-clock"></i>
      </div>
      <div className="d-flex align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
        {seconds6}
      </div>
      <div className="d-flex align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
        {seconds5}
      </div>
      <div className="d-flex align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
        {seconds4}
      </div>
      <div className="d-flex align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
        {seconds3}
      </div>
      <div className="d-flex align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
        {seconds2}
      </div>
      <div className="d-flex align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
        {seconds}
      </div>
 </div>
    );
};

export default Counter;