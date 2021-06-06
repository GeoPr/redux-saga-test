import { DECREMENT, INCREMENT } from './actionsTypes';

export const counterReducer = (state = 0, action: any): number => {
    switch (action.type) {
        case INCREMENT: {
            return state + 1;
        }

        case DECREMENT: {
            return state - 1;
        }

        default: {
            return state;
        }
    }
};
