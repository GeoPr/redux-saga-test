import { call, put, takeEvery } from 'redux-saga/effects';
import { decrement, increment } from './actions';
import { ASYNC_DECREMENT, ASYNC_INCREMENT } from './actionsTypes';

const delay = (ms = 1000) => new Promise((res, rej) => setTimeout(res, ms));

function* asyncIncrement() {
    yield call(delay);
    yield put(increment());
}

function* asyncDecrement() {
    yield call(delay);
    yield put(decrement());
}

export function* asyncIncrementWatcher() {
    yield takeEvery(ASYNC_INCREMENT, asyncIncrement);
}

export function* asyncDecrementWatcher() {
    yield takeEvery(ASYNC_DECREMENT, asyncDecrement);
}
