import React, { useRef, useState } from 'react'
import './stopwatch.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRotateRight } from '@fortawesome/free-solid-svg-icons'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setPause] = useState(false);
    const countRef = useRef(null);

    const start = () => {
        setIsActive(true);
        setPause(true);
        countRef.current = setInterval(() => { setTime((time) => time + 1) }, 1000)
    }
    const pause = () => {
        clearInterval(countRef.current);
        setPause(false);
    }
    const reset = () => {
        clearInterval(countRef.current);
        setIsActive(true);
        setPause(false);
        setTime(0);
    }
    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <div className='stopwatch'>
            <p className='stopwatch-p'>STOPWATCH</p>
            <div className='stopwatch-buttons'>
                <button onClick={start}><FontAwesomeIcon icon={faPlay} /></button>
                <button onClick={pause}><FontAwesomeIcon icon={faPause} /></button>
                <button onClick={reset}><FontAwesomeIcon icon={faRotateRight} /></button>
            </div>
            <div>
                <p className='stopwatch-time'>{formatTime()}</p>
            </div>
        </div>
    )
}

export default Stopwatch;