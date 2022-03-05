import React from 'react';
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch} from '../components/TodoSearch'
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../components/TodoContext'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';

function AppUI() {

	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal, 
		setOpenModal
	} = React.useContext(TodoContext);

    return(
        <>
			<TodoCounter/>
			<TodoSearch/>
	
			
			<TodoList>
				{error && <TodosError/>}
				{loading && <TodosLoading/> }
				{(!loading && !searchedTodos.length) && <EmptyTodos/>}
						
				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{ !!openModal && 
				<Modal>
					<TodoForm/>
				</Modal>
			}
				
			<CreateTodoButton
				setOpenModal={setOpenModal}	
			/>
		</>
    )
}

export {AppUI};