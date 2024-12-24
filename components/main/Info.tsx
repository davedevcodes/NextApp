import React from 'react'
import '../styles/Info.css';
import Image from 'next/image';
import Stopwatch from './StopWatch';
import { FaWallet } from 'react-icons/fa';

const Info  = () => {
  return (
    <div className='info'>
        <div className="box"
        style={{
          backgroundImage: "url('./blog-header-3-768x464.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding:"0",
        }}
        >
          <div className="title">
            <h2>
              David Smith
            </h2>
            <span>
              Contractor
            </span>
          </div>
        </div>
        <div className="box">
                  <span>
                    <FaWallet />
                    Balance
                  </span>
                  <h1>
                    $10,000
                  </h1>
                </div>
        <div className="box">
          <h2 className='tTracker'>
            Time Tracker
          </h2>
          <Stopwatch />
          
        </div>
    </div>
  )
}

export default Info