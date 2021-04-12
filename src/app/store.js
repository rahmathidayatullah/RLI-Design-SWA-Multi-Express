import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from 'features/Auth/reducer'
import transactionReducer from 'features/Transaction/reducer'
import courierReducer from 'features/Courier/reducer'
import settingReducer from 'features/Setting/reducer'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  transaction: transactionReducer,
  courier: courierReducer,
  setting: settingReducer,
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

// (6) export store
export default store;