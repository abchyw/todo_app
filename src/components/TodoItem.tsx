import React from 'react';
import Todo from 'models/Todo';

interface Props {
    todo: Todo
}
const TodoItem = ({ todo }: Props) => {
    return (<>
        <div>{todo.title} </div>
        < button > done </button>
    </>);
};

export default TodoItem;