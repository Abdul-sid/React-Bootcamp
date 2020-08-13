import React, {useContext} from 'react'
import {TransactionContext} from './TransationalContext.js'

export default function Child(){

    let transaction = useContext(TransactionContext)

    return(

        <div>
            <h1>Expense Tracker</h1>

            <h3>Your Balance <br /> $200 </h3>
            <div class = "statements">
                    <h3>Income <br /> $20 </h3>
                    <h3>Expense <br /> $50 </h3>
            </div>

            <h3>History</h3>
            <hr/>

            <ul className = "transaction-list">
                {transaction.map((transObj, ind) => {
                    return(
                    <li>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>
                    )
                })}
            </ul>
           
            <h3>Add New Transaction</h3>
            <hr/>

           <form className = "transaction-form" >
               <label>
                   Enter Description <br/>
                   <input type ="text" required></input> <br/>
               </label>
               <label>
                   Enter Amount <br/>
                   <input type ="number" required></input> <br/>
               </label>

               <input type = "submit" value= "Add Transaction" />
           </form>
           
            
        </div>
    )
}