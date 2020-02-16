import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, TodoActions } from '../../store/todo/actions'
import { RootState} from '../../store';
import { Dispatch } from 'redux';

// this function will be called when the state changes
const mapStateToProps = (state: RootState) => {
    return {
        todoList: state.todoList.todoList
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>)=> {
    return {
        addTodo: (title: string) => dispatch(addTodo(title))
    }
}

export type TodoContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
