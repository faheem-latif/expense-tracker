import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initail state of the app
const initailState = {
  transaction: [],
};

//create context
export const GlobalContext = createContext(initailState);

//provider context for children nose froon app.js

export const GlobalProvider = ({ children }) => {
  // useReducer hook to manage state with the AppReducer
  const [state, dispatch] = useReducer(AppReducer, initailState);

  // Actions for modifying the state
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
