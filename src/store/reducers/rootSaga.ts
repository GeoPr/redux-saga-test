import { all, fork } from 'redux-saga/effects';
import * as todosSagas from './todosReducer/sagas';
import * as counterSagas from './counterReducer/sagas';

console.log('counterSagas', counterSagas);
console.log('todosSagas', todosSagas);

export function* rootSaga() {
    yield all([
        ...Object.values(todosSagas),
        ...Object.values(counterSagas),
    ].map(fork));
}
