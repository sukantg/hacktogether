import React from 'react'
import App from '../App'
import Navbar from './Navbar'

function Hoc() {
  return (
   <>
   <div className='flex '>
    <div className='gap-2 px-4'>
    <App/>
    </div>
   <div className='gap-2 px-4'>
   <App/> 
   </div>
   
   </div>
   
   </>
  )
}

export default Hoc