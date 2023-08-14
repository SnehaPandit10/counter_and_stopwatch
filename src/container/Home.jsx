import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import './home.css';
import Counter from '../components/counter/Counter';
import Stopwatch from '../components/stopwatch/Stopwatch';

const Home = () => {
    const [showCounter, setShowCounter] = useState(false);
    const [showStopwatch, setShowStopwatch] = useState(false);

    const toggleCounter = () => {
        setShowCounter(!showCounter);
    };
    const toggleStopwatch = () => {
        setShowStopwatch(!showStopwatch);
    };

    return (
        <div className='home-main'>
            <div className={`home-counter ${showCounter ? 'show' : ''}`}>
                <div className={`home-counter-main ${showCounter ? 'left' : 'center'}`}>
                    <h1>COUNTER</h1>
                    <button type='button' class='btn btn-secondary counter-b' onClick={toggleCounter}>{showCounter ? 'Hide' : 'Show'}</button>
                </div>
                <div className={`counter-content ${showCounter ? 'show' : ''}`}>
                    {showCounter && <Counter />}
                </div>

            </div>
            <div className={`home-stopwatch ${showCounter ? 'show' : ''}`}>
                <div className={`home-stopwatch-main ${showStopwatch ? 'left' : 'center'}`}>
                    <h1>STOPWATCH</h1>
                    <button type='button' class='btn btn-secondary stopwatch-b' onClick={toggleStopwatch}>{showStopwatch ? 'Hide' : 'Show'}</button>
                </div>
                <div className={`stopwatch-content ${showCounter ? 'show' : ''}`}>
                    {showStopwatch && <Stopwatch />}
                </div>
            </div>
        </div >
    )
}

export default Home;