import React from 'react';

const Secondscounter = (props) => {
    return(
      <>
        <div className="d-flex justify-content-center bg-dark p-5 m-3">
          <div className="d-flex flex-column align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>
              <i className="fa-regular fa-clock"></i>
          </div>
          {props.numbers.map((digit, index) => (
            <div key={index} className="d-flex flex-column align-items-center justify-content-center border border-white rounded bg-dark text-white me-3" style={{ width: '100px', height: '120px', fontSize: '80px', fontFamily: 'revert', fontWeight: 'bold', userSelect: 'none' }}>{digit}</div>
          ))}
        </div>
      </>
    )
};

export default Secondscounter;