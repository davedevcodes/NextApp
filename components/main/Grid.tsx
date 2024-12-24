import React from 'react'
import '../styles/Grid.css';
import Info from './Info';
import Revenue from './Revenue';


const Grid = () => {
  return (
    <div>
         <div className="left">
           <Info />
           <Revenue />
          </div>
    </div>
  )
}

export default Grid