import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  // Accessing the transactions from the global context
  const { transaction } = useContext(GlobalContext);

  // Extracting amounts from transactions
  const amounts = transaction.map((transaction) => transaction.amount);

  // Calculating total income (positive amounts)
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  // Calculating total income (negative amounts)
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
