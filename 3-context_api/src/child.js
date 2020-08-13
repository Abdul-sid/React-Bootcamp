import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
        console.log(counterValue)
    return(
        <div>
            <h1>This the first child after parent</h1>
    <h4>Countervalue is : {counterValue[0]}</h4>

    <button onClick={()=> {counterValue[1](++counterValue[0])}}>click to change state of parent</button>
        </div>
    )
}

export default Child