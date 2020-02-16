import { combineReducers } from 'redux';
import { todoList } from './todo/reducer';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router'

// shorthand of {todoList: state.todoList}
export const history = createBrowserHistory();
export const rootReducer = combineReducers({
    router: connectRouter(history),
    todoList
})

export type RootState = ReturnType<typeof rootReducer>;