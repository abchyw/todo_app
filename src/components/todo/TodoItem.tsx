import React from 'react';
import Todo from 'models/Todo';
import styled from 'styled-components';

interface Props {
    todo: Todo
}
const TodoItem = ({ todo }: Props) => {
    return (<Wrapper>
        <Text>{todo.title} </Text>
        <Button> done </Button>
    </Wrapper>);
};

export default TodoItem;

const Wrapper = styled.div`
font-size: 1.5em; 
text-align: left;
padding: 20px;
border-color: black;
border-width: 2px;
border: solid;
display: flex;
flex-display: column;
`;

const Text = styled.div`
flex-grow: 1
`

const Button = styled.button`
flex-basis: 20px;
`