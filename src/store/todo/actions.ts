export const ADD_TODO = "ADD_TODO";

interface AddTodoAction {
    type: typeof ADD_TODO
    playload: { title: string }
}

export type TodoActions = AddTodoAction;

export const addTodo = (title: string): TodoActions => {
    return {
        type: ADD_TODO,
        playload: { title }
    };
}