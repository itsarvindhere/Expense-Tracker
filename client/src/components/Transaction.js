import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {numberWithCommas} from "../utils/format.js";

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <div>
            <li className={transaction.amount < 0 ? "minus" : "plus"}>
          {transaction.text} <span>{transaction.amount <0 ? "-" : "+"} $ {numberWithCommas(Math.abs(transaction.amount)) }</span><button onClick={() => {
              deleteTransaction(transaction._id);
          }} className="delete-btn">x</button>
        </li>
        </div>
    )
}
