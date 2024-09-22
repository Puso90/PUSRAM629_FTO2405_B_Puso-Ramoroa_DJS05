// reducer 
import { INCREMENT, DECREMENT } from './action.js';

const initialState = { count: 0, history: [] };

const tallyReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                history: [...state.history, state.count + 1],
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                history: [...state.history, state.count - 1],
            };
        default:
            return state;
    }
};

export default tallyReducer;