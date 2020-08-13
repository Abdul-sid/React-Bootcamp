import React, { useContext } from 'react'
import Child from './child.js'
import Child2 from './Child2.js'

export default function Parent(){
    return(
        <div>
            <h1> This is parent containing child</h1>
           <Child/>
           <Child2/>
        </div>
    )
}