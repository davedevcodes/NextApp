import React from 'react';
import '../styles/Stats.css';
import Task from './tasks';
import Grid from './Grid';


const Stats = () => {
  return (
    <div className='Stats'>
       <Grid />
        <Task />
    </div>
  )
}

export default Stats