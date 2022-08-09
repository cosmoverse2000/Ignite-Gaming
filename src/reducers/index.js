import gameReducer from '../reducers/gameReducer';
import detailReducer from '../reducers/detailReducer';
import isLoggedReducer from '../reducers/isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    gameRedu: gameReducer,
    detailRedu: detailReducer,
    isLogged: isLoggedReducer,
});

export default allReducers;