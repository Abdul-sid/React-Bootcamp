import React, {useReducer} from 'react';
import reducer from './counterReducer'

export default function Child2(){

    let [state, dispatch] = useReducer(reducer, 50)

    console.log(state)

    return(
        <div>
             <h1>This the second child after parent</h1>
            <h4>Changing states using reducer: {state}</h4>
            <button onClick = {() => dispatch('INCREMENT')} >Increment Reducer</button>
            <button onClick = {() => dispatch('DECREMENT')} >Decrement Reducer</button>

        </div>
    )
}