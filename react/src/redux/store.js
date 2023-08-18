import { createStore } from "redux";
import rootReducer from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// bao gom: reducer, middelware...
const store = createStore(
  rootReducer,
  composeWithDevTools() // dung cho redux tund, saga
);

export default store;
