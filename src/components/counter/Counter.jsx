import React, { useState } from 'react'
import './counter.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faRotateRight } from '@fortawesome/free-solid-svg-icons'

const Counter = () => {
  const [c, setC] = useState(0);

  const increase = () => {
    setC((prev) => prev + 1);
  }
  const decrease = () => {
    setC((prev) => {
      if (prev <= 0)
        return 0;
      else
        return prev - 1;
    });
  }
  const refresh = () => {
    setC(0);
  }
  return (
    <div className='counter'>

      <p className='counter-p'>COUNTER</p>
      <div className='counter-buttons'>
        <button onClick={increase}><FontAwesomeIcon icon={faPlus} /></button>
        <button onClick={decrease}><FontAwesomeIcon icon={faMinus} /></button>
        <button className='counter-refresh' onClick={refresh}><FontAwesomeIcon icon={faRotateRight} /></button>
      </div>
      <div>
        <p className='counter-c'>{c}</p>
      </div>
    </div>
  )
}

export default Counter;