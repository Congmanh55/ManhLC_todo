import React from 'react';
import yourImage from './logo.svg'
import './Task.modul.css'
import { useState } from 'react';

interface TasksProps {
    filteredJobs: string[];
    handleJobClick: (index: number) => void;
    deleteJob: (index: number) => void;
}
function Tasks({ filteredJobs, handleJobClick, deleteJob}: TasksProps):JSX.Element {
    const [showMessage, setShowMessage] = useState(false);
    const [filter, setFilter] = useState('all');

    function handleMouseOut(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setShowMessage(true);
      }
    
      function handleMouseOver(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setShowMessage(false);
      }
    
    return(
        <div className="nav-item_2">
            <div className="nav-div">
                <p className="nav-div_1" >List:</p>
                <select value={filter} onChange={e => setFilter(e.target.value)} className="nav-div_2">
                    <option value="all">All</option>
                    <option value="todo">Todo</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <ul className="list_1">
                {filteredJobs?.length > 0 && filteredJobs?.map((job, index) => (
                <li 
                key = {index}  
                className="list-item_1" 
                onClick={() => handleJobClick(index)}
                style ={{textDecoration: job.startsWith('-') ? 'line-through' : 'none'}}
                ><div className="item_1" onMouseOver={handleMouseOut} onMouseOut={handleMouseOver}> {job.replace(/^-/,'')} {showMessage && (<img onClick = {()=>deleteJob(index)} src={yourImage} className="item_2" style={{ cursor: 'pointer' }}/> )}</div></li>
                ))}
          </ul>
        </div>
    )
}

export default Tasks;