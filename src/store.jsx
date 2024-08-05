import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer, // LATER add more reducers for other entities like loans, transactions, etc.  // LATER add actions for other entities like loan requests, payments, etc.  // LATER add middleware for handling errors, logging, etc.  // LATER add sagas for handling side effects, such as async API calls, etc.  // LATER add thunks for handling async actions, such as dispatching multiple actions, etc.  // LATER add support for different environments, such as development, testing, and production, with different configurations and setups.  // LATER add support for localization, with different language support and translations.  // LATER add support for internationalization, with different currency, date, and number formats.  // LATER add support for user authentication and authorization, with different roles and permissions.  // LATER add support for data persistence, with different storage solutions, such as local
  }
})

export default store;
