import { TodoState } from "./types";
import { TodoActions, ADD_TODO } from "./actions";

const initialState: TodoState = {
    todoList: []
}
export const todoList = (state = initialState, action: TodoActions): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList,
                    {
                        title: action.playload.title
                    }
                ]
            })
        default:
            return state;
    }
}