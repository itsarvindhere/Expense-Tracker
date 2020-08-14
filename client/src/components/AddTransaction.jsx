import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onClick = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(),
      text,
      amount
    }

    setText('');
    setAmount(0);

    addTransaction(newTransaction);
  }

    return (
        <>
           <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..." onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount} onChange={e => setAmount(parseInt(e.target.value))} />
        </div>
        <button onClick={onClick}className="btn">Add transaction</button>
      </form> 
        </>
    )
}
