import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer/todosReucer';
import { counterReducer } from './counterReducer/counterReducer';

export const rootReducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer,
});
