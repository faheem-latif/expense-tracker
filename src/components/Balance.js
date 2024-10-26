import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  // Accessing the transactions from the global context
  const { transaction } = useContext(GlobalContext);

  // Extracting amounts from transactions
  const amounts = transaction.map((transaction) => transaction.amount);

  // Calculating the total balance using reduce and formatting to 2 decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      {/* Displaying the balance section */}
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
