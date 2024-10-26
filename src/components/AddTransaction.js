import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  // State for handling text input
  const [text, setText] = useState("");
  // State for handling amouunt input
  const [amount, setAmount] = useState(0);

  // Accessing the addTransaction function from the global context
  const { addTransaction } = useContext(GlobalContext);

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Creating a new transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };
    // Calling the addTransaction function from the global context
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
