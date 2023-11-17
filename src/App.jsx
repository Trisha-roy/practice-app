
import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';
import Sunglass from './components/Sunglass/Sunglass';

function App() {

  const [watches,setWatches]=useState([]);
  
  const [cart,setCart]=useState([])

  useEffect(()=>{
    fetch('watch.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])

  const [sunglass,setSunglass]=useState([]);
  useEffect(()=>{
    fetch('sunglass.json')
    .then(res=>res.json())
    .then(data=>setSunglass(data))
  },[])
   

  const handleClick=sunglass=>{
const newCart=[...cart,sunglass]
setCart(newCart);aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

}

  return (
    <div>
      
      <h2>Watch Section</h2>

      <div className='watch-container'>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      </div>

      <h2>Sunglass Section</h2>
      <h4>Cart: {cart.length}</h4>
      <div className='sunglass-container'>
      
      {
        sunglass.map(sun=><Sunglass 
        key={sun.id} 
        handleClick={handleClick}
        sun={sun}></Sunglass>)
      }
      </div>
    </div>
  )
}

export default App
