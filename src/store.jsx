import { combineReducers, createStore } from "redux";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    // LATER
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload,
        purpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer, // LATER add more reducers for other entities like loans, transactions, etc.  // LATER add actions for other entities like loan requests, payments, etc.  // LATER add middleware for handling errors, logging, etc.  // LATER add sagas for handling side effects, such as async API calls, etc.  // LATER add thunks for handling async actions, such as dispatching multiple actions, etc.  // LATER add support for different environments, such as development, testing, and production, with different configurations and setups.  // LATER add support for localization, with different language support and translations.  // LATER add support for internationalization, with different currency, date, and number formats.  // LATER add support for user authentication and authorization, with different roles and permissions.  // LATER add support for data persistence, with different storage solutions, such as local
});

const store = createStore(rootReducer);

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

function payLoan() {
  return {
    type: "account/payLoan",
  };
}

function createAccount(fullName, nationalID, createdAt) {
  return {
    type: "customer/createAccount",
    payload: {
      fullName,
      nationalID,
      createdAt,
    },
  };
}

store.dispatch(
  createAccount("Noble Benjamin", "29r409t-e2", "August 04, 2024")
);

console.log(store.getState())
