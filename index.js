// @ts-check
// main javascript

import Store from './store.js';
import tallyReducer from './reducer.js';
import { increment, decrement } from './action.js';

const store = new Store(tallyReducer);

// Function to log the state
const logState = () => {
    console.log('Current state:', store.getState());
};

// Subscribe to state changes
store.subscribe(logState);

// Dispatch some actions
store.dispatch(increment()); // Increment count
store.dispatch(increment()); // Increment count
store.dispatch(decrement()); // Decrement count
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());




