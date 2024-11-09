import React from 'react'
import { useStateTogether } from 'react-together'
function Card() {
    const [count, set_count] = useStateTogether('counter_0', 0)

    return (
    <>
    <div className='card'>
        <button onClick={() => set_count((count) => count + 1) }>Synq'd count is {count}</button> 
        {/* <button onClick={() => set_count((count) => count + 1)}>Synq'd count is {count}</button> */}
        <button {...{ style: { marginLeft: '1rem' }, onClick: () => set_count(0) }}>Reset</button>
      </div>
    </>
  )
}

export default Card