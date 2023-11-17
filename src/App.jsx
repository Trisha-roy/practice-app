
import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';

function App() {

  const [watches,setWatches]=useState([]);
  useEffect(()=>{
    fetch('watch.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
  

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      
      
    </>
  )
}

export default App
