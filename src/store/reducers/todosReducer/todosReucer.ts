import { SAVE_TODOS } from './actionsTypes';

export const todosReducer = (state = [], action: any): any[] => {
    switch (action.type) {
        case SAVE_TODOS: {
            return action.payload.todos;
        }

        default: {
            return state;
        }
    }
};
