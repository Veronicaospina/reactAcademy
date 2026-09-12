import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [cuenta, setCuenta] = useState(0);
    return (
        <div className='counter'>
            <button className='counter__button' onClick={() => setCuenta(cuenta - 1)}>-</button>
            <span className='counter__value'>{cuenta}</span>
            <button className='counter__button' onClick={() => setCuenta(cuenta + 1)}>+</button>
        </div>
    );
}

export default Counter;
