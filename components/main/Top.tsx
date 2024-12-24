import React from 'react';
import '../styles/Top.css';

const Top = () => {
  return (
    <div>
      <div className='top'>
        <h1 className="greeting">
          Welcome, David
        </h1>
        <div className="topRight">
          <div className="set">
            <h2>
              35
            </h2>
            <span>
              Total Orders
            </span>
          </div>
          <div className="set">
            <h2>
              15
            </h2>
            <span>
              Completed
            </span>
          </div>
          <div className="set">
            <h2>
              20
            </h2>
            <span>
              Uncompleted
            </span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Top