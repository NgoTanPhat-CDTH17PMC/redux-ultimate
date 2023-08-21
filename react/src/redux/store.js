import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

// bao gom: reducer, middelware...
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) // dung cho redux tund, saga
);

export default store;
