import React, { createContext, useReducer, Children } from 'react'
import TransactionReducer from './transReducer'

const initialTransaction = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "bank"},
    {amount: 50, desc: "pocket money"}
]

export const TransactionContext = createContext(initialTransaction)


export const TransactionProvider = ({}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction)

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })

        return(
            <TransactionContext.Provider value={{
                transactions: state,
                addTransaction: addTransaction
            }}>
                {Children}
            </TransactionContext.Provider>
        )
    }
}