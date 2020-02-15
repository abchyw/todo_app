import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Todo from 'models/Todo';
import { TodoContainerProps } from './TodoContainer';

// interface Props {
//     todoList: Todo[]
//     addTodo: (title: string) => void;
// }
function TodoList({ todoList, addTodo }: TodoContainerProps) {
    const [title, setTitle] = useState('');
    return (
        <>
            {
                todoList.map((todo: Todo) => {
                    return <TodoItem todo={todo} />;
                })
            }
            <div>
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} value={title} />
                <button onClick={
                    () => {
                        addTodo(title);
                    }
                }>add</button>
            </div>
        </>);
}

export default TodoList;