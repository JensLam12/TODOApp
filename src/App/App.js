import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Tomar el curso de React', completed: false },
	{ text: 'Llorar con la llorona', completed: false }
]

function App(props) {

	//console.log("render antes del use effect");

	//React.useEffect( () => {
	//	console.log("use effect");
	//}, [totalTodos] ); //Poner como escucha que se ejecute cuando se pone alguna variable, lista,etc en medio de los [], y si esta solamente como "[]" se ejecute solo una vez

	//console.log("render despues del use effect");

	return (
		<TodoProvider>
			<AppUI/>
		</TodoProvider>
	);
}

export default App;
