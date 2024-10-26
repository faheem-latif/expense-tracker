// Reducer function for managing state related to transactions
export default (state, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    default:
      return state;
  }
};
