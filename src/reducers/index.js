import counterReducer from '../reducers/counter';
import isLoggedReducer from '../reducers/isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer,
});

export default allReducers;