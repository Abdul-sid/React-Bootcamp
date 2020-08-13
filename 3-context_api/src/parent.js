import React, { useContext } from 'react'
import Child from './child.js'

export default function Parent(){
    return(
        <div>
            <h1> This is parent containing child</h1>
           <Child/>
        </div>
    )
}