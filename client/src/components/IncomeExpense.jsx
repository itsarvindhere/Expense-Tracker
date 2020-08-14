import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {numberWithCommas} from "../utils/format.js";

export const IncomeExpense = () => {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const reducer = (accumulator, amount) => accumulator + amount;

  const totalIncome = amounts
  .filter((amount) => amount > 0)
  .reduce(reducer, 0); //0 is Initial Value. So, if there's no value in array, then this is used as initial value 
  
  
  const totalExpenses = amounts
  .filter((amount) => amount < 0)
  .reduce(reducer, 0);

 

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${numberWithCommas(totalIncome.toFixed(2))}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${numberWithCommas((Math.abs(totalExpenses)).toFixed(2))}</p>
        </div>
        </div>
    )
}
