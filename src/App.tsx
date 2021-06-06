import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import './App.css';
import { Todos } from './components/Todos';
import { Counter } from './components/Counter/Counter';


const App = () => {
    return (
        <Provider store={store}>
            <div className="wrapper">
                <Todos />
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
