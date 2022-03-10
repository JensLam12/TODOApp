import React from 'react';
import './TodoForm.css';

function TodoForm( { addTodo, setOpenModal} ) {

    const [ newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue( event.target.value);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onAdd}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu wea"
            />
            <div>
                <button 
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}