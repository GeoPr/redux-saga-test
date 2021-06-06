import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS, SAVE_TODOS } from './actionsTypes';

const URL = 'http://jsonplaceholder.typicode.com/todos?_limit=5';

const _fetchTodos = async (smth: any) => {
    const response = await fetch(URL);
    return await response.json();
};

function* fetchTodos(action: any): Generator<any, any, any> {
    try {
        const todos = yield call(_fetchTodos, action.something);
        yield put({ type: SAVE_TODOS, payload: { todos } });
    } catch (e) {
        console.log('e', e);
    }
}

export function* fetchTodosSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodos);
}
