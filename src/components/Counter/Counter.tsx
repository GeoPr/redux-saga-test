import { useDispatch, useSelector } from 'react-redux';
import {
    asyncDecrement,
    asyncIncrement,
} from '../../store/reducers/counterReducer/actions';
import './Counter.css';

export const Counter = () => {
    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    const decrementCount = () => {
        dispatch(asyncDecrement());
    };

    const incrementCount = () => {
        dispatch(asyncIncrement());
    };

    return (
        <>
            <button onClick={incrementCount}>increment</button>
            <div data-testid="counter">{counter}</div>
            <button onClick={decrementCount}>decrement</button>
        </>
    );
};
