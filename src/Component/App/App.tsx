import React, { useState } from 'react';
import './App.modul.css';
import Header from '../Header/Header';
import Input from '../Input/Input'
import Tasks from '../Task/Tasks';

function App():JSX.Element {
  const storageJobs = JSON.parse(localStorage.getItem('jobs') as string)
  const [job, setJob] = useState<string>('')
  const [jobs, setJobs] = useState<string[]>(storageJobs ?? [])
  const [clickCount, setClickCount] = useState<number>(0);
  const [filter, setFilter] = useState<string>('all');
  
  const Submit = () => {
    if(job.trim()===''){
      return;
    }
    setJobs(prev => {
      const newJobs = [...prev, job]

      //Luu vao localStorage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    }) 

    setJob('')

  }

  function deleteJob(index: number) {
    if (jobs.length > 0) {
      const newJobs = jobs.filter((_, i) => i !== index);
      if (newJobs.length > 0 && (newJobs[newJobs.length - 1] === '' || newJobs[newJobs.length - 1] === '-' )) {
        newJobs.pop();
      }
      setJobs(newJobs);
      localStorage.setItem('jobs', JSON.stringify(newJobs))
    }
  }

  const handleJobClick = (index:number) => {
    setClickCount((prevCount) => prevCount+1)
    setJobs((prevJobs) => {
      const newJobs = [...prevJobs]
      const task = newJobs[index]?.trim() ?? '';

      if (task.startsWith('-') && clickCount % 2 === 0) {
        newJobs[index] = task.substring(1);
      } else if (!task.startsWith('-') && clickCount % 2 === 1) {
        newJobs[index] = '-' + task;
      }
    
      return newJobs
    })
  }
  const filteredJobs = jobs.filter((job) => {
    if(filter === 'done'){
      return job.startsWith('-')
    }else if (filter === 'todo'){
      return !job.startsWith('-')
    }else{
      return true;
    }
  })
  console.log(jobs)
  return (
    <div className='nav'>
      <Header/>
      <Input 
        job={job} 
        setJob={setJob} 
        Submit={Submit}/>
      <Tasks 
        handleJobClick={handleJobClick}
        filteredJobs={filteredJobs}
        deleteJob={deleteJob}
      />
    </div>
    
  );
}

export default App;
