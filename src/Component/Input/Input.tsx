import React from 'react';
import './Input.modul.css'

interface InputProps {
  job: string;
  setJob: React.Dispatch<React.SetStateAction<string>>;
  Submit: () => void;
}

function Input({job, setJob, Submit}:InputProps):JSX.Element {
    return (
        <form className = "header">
          <input 
            type ="text" 
            value={job} 
            onChange={e => setJob(e.target.value)} 
            className = "heading_1"
            placeholder="Nhap cong viec"
          />
          <button onClick={Submit} className = "heading_2" style={{cursor: 'pointer'}}>
            Add
          </button>
        </form>
    )
}

export default Input;