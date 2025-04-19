import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "@/reducers/product";
import { reducer as authReducer } from "@/reducers/auth";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

const initState = {};
const store = legacy_createStore(
  rootReducer,
  initState,
  applyMiddleware(thunk)
);
window.store = store;
export default store;
