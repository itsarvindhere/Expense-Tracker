import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {numberWithCommas} from "../utils/format.js";
export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)
    
    const total = amounts.reduce((accumulator, amount) => (accumulator + amount), 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${numberWithCommas(total.toFixed(2))}</h1>
        </>
    )
}




