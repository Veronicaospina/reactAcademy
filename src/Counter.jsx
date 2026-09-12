import { useState } from 'react';

function Counter() {
    const [cuenta, setCuenta] = useState(0);
    return (
        <div>
            <button onClick={() => setCuenta(cuenta - 1)}>-</button>
            <span>{cuenta}</span>
            <button onClick={() => setCuenta(cuenta + 1)}>+</button>
        </div>
);
}

export default Counter;