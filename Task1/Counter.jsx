//  solved problem using state 
import { useState } from 'react';
import './style.css';
//Declaring count as state
function Counter() {
    const [count, setCount] = useState(0);
//It decreases until the value is 0
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <p className='count'>{count}</p>
            <button className='btn-1' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn-2' onClick={decrement}>Decrement</button>
            <button className='btn-3' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter;