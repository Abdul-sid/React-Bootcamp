import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    return(
        <div>
            <h1>This the first child after parent</h1>
    <h4>Changing states using context api : {counterValue[0]}</h4>

    <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment context</button>
    <button onClick={()=> {counterValue[1](--counterValue[0])}}>Decrement context</button>

        </div>
    )
}

export default Child