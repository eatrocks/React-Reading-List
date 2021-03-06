import { combineReducers } from 'redux';

// action constants
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const TOGGLE_READ = 'TOGGLE_READ';

// reducers
const books = (state = {}, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return {
                ...state,
                [action.book.id]: {
                    read: false,
                    ...action.book
                }
            }
        case REMOVE_BOOK:
            var copy = Object.assign({}, state);
            delete (copy)[action.id];
            return copy;
        case TOGGLE_READ:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    read: !state[action.id].read
                }
            }
        default:
            return state;
    }
}

const order = (state = [], action) => {
    switch(action.type) {
        case ADD_BOOK:
            if (state.includes(action.book.id)) {
                return state; // no duplicates allowed
            }
            return [
                action.book.id,
                ...state
            ]
        case REMOVE_BOOK:
            return state.filter((id) => action.id !== id )
    }
    return state;
}

export default combineReducers({books, order});

// selectors
export const selectOrderedBooks = ({books, order}) => order.map((id) => books[id]);
