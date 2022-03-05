import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        //prevstate devuelve el estado anterior, en este caso si open modal es true, se hara false, y viceversa
        props.setOpenModal( prevState => !prevState);
    }

    return (
        <button 
            className="CreateTodoButton"
            //onClick={ () => onClickButton('Aqui se deberia abrir el modal') }
            onClick={ onClickButton }
        >
            +
        </button>
    );
}

export { CreateTodoButton };