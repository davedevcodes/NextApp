import React from 'react'
import '../styles/task.css';

const Task = () => {
  return (
    <div>
        <div className="Tasks">
         <div className="rightTop">
            <h2>
              Tasks
            </h2>
            <span>
              65
            </span>
         </div>
         <div className="rightBottom">
            <span>
              On-going Tasks
            </span>
            <ul>
              <li>
                <p>
                Task Name
                </p>
                
                <input type="checkbox" name="" 
                className='Check'
                />
              </li>
              <li>
                <p>
                Task Name
                </p>
                <input type="checkbox" name="" 
                className='Check'
                />
              </li>
              <li>
                <p>
                Task Name
                </p>
                <input type="checkbox" name="" 
                className='Check'
                />
              </li>
              <li>
                <p>
                Task Name
                </p>
                <input type="checkbox" name="" 
                className='Check'
                />
              </li>
              
            </ul>
         </div>
        </div>
    </div>
  )
}

export default Task
