import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import signInReducer from './screens/SignIn/SignInReducer';
import signUpReducer from './screens/SignUp/SignUpReducer';

const reducers = combineReducers({
  signInAction: signInReducer,
  signUpAction: signUpReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;

// export default function store() {
//   createStore(reducers, applyMiddleware(ReduxPromise));
// }
