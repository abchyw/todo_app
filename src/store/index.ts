import { combineReducers } from 'redux';
import { todoList } from './todo/reducer';

// shorthand of {todoList: state.todoList}
export const rootReducer = combineReducers({
    todoList
})

export type RootState = ReturnType<typeof rootReducer>;