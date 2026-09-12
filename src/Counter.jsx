import { useState } from 'react';

function Counter() {
    const [cuenta, setCuenta] = useState(0);
    return (
        <div className='controles'>
            <button className='cont' onClick={() => setCuenta(cuenta - 1)}>-</button>
            <span className='lacuenta'>{cuenta}</span>
            <button className='cont' onClick={() => setCuenta(cuenta + 1)}>+</button>
        </div>
);
}

export default Counter;