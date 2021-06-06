import {
    ASYNC_DECREMENT,
    ASYNC_INCREMENT,
    DECREMENT,
    INCREMENT,
} from './actionsTypes';

export const increment = () => ({
    type: INCREMENT,
    payload: {},
});

export const decrement = () => ({
    type: DECREMENT,
    payload: {},
});

export const asyncIncrement = () => ({
    type: ASYNC_INCREMENT,
    payload: {},
});

export const asyncDecrement = () => ({
    type: ASYNC_DECREMENT,
    payload: {},
});
