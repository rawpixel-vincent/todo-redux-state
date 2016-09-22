import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import todos from './todos/reducers/todos';
import selectedPage from './site/reducers/selected-page';
const reducers = {
	todos,
	selectedPage
};

// middleware that logs all actions to console
const consoleLog = store => next => action => {
	if (typeof action !== 'function') {
		console.log(action);
	}
	return next(action);
};

// middleware
let middleWare;
if (process.env.NODE_ENV !== 'production') {
	middleWare = applyMiddleware(consoleLog, thunk);
} else {
	middleWare = applyMiddleware(thunk);
}

// create store
export default createStore(combineReducers(reducers), middleWare);
