import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import signInReducer from './screens/SignIn/SignInReducer';

const reducers = combineReducers({
  signInAction: signInReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;

// export default function store() {
//   createStore(reducers, applyMiddleware(ReduxPromise));
// }
