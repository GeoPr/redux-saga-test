import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTodosAction } from '../store/reducers/todosReducer/actions';

export const Todos = () => {
    const dispatch = useDispatch();
    const todos: any[] = useSelector((state: any) => state.todos);

    useEffect(() => {
        dispatch(fetchTodosAction());
    }, [dispatch]);

    if (!todos?.length) {
        return <div>loading...</div>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};
