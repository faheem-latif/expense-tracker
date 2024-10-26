import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  // Accessing the deleteTransaction function from the global context
  const { deleteTransaction } = useContext(GlobalContext);

  // Determining the sign based on the amount (negative for expense, positive for income)
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {" "}
        {sign}${Math.abs(transaction.amount)}
      </span>
      {/* Button for deleting the transaction */}
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
