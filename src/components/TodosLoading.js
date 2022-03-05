import React from 'react';
import './TodoLoading.css'

function TodosLoading() {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadintTodo-text'>Cargando TODOS...</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    )
}

export {TodosLoading}