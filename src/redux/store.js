import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import authErrorReducer from "./reducers/authErrorReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rooReducer = combineReducers({
  authState: authReducer,
  authError: authErrorReducer,
});
const store = createStore(rooReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
