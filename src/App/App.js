import React from 'react';
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch} from '../components/TodoSearch'
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { useTodos } from '../components/useTodos'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoHeader } from '../components/TodoHeader';
import { ChangeAlert } from '../components/ChangeAlert';

function App() {

	const {
		state,
		stateUpdaters
	} = useTodos();

	const {
		error,
		loading,
		searchedTodos,
		totalTodos,
		completeTodo,
		completedTodos,
		openModal, 
		searchValue
	} = state;

	const {
		setOpenModal,
		addTodo,
		deleteTodo,
        setSearchValue,
		sincronizeTODOS
	} = stateUpdaters;

	return(
        <>
			<TodoHeader loading={loading}>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>
			
			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				searchText={searchValue}
				totalTodos={totalTodos}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResults={ (searchText) => <p>No hay resultados para {searchText}</p>}
				// render={todo => (
				// 	<TodoItem
				// 		key={todo.text}
				// 		text={todo.text}
				// 		completed={todo.completed}
				// 		onComplete={() => completeTodo(todo.text)} //Marcamos el todo como completado
				// 		onDelete={() => deleteTodo(todo.text)} //Eliminamos en todo
				// 	/>
				// )}
			>
				{todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)} //Marcamos el todo como completado
						onDelete={() => deleteTodo(todo.text)} //Eliminamos en todo
					/>
				)}
			</TodoList>

			{ !!openModal && 
				<Modal>
					<TodoForm 
						addTodo={addTodo}
        				setOpenModal={setOpenModal}
					/>
				</Modal>
			}
				
			<CreateTodoButton
				setOpenModal={setOpenModal}	
			/>

			<ChangeAlert 
				sincronize ={sincronizeTODOS}
			/>
		</>
    )
}

export default App;
