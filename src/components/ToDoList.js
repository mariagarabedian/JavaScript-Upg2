import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDos, setToDos}) => {

    if(toDos.length === 0) {
        return (
            <div id="todo-list" className="mb-5">
                There is noting to do, enjoy your day!
            </div>
        )
    }

    return (
        <div id="todo-list" className="mb-5">
            
            {
                toDos.map(toDo =>(
                    <ToDo key={toDo.id} toDo={toDo} toDos={toDos} setToDos={setToDos}/>
                ))
            }

        </div>
    )
}

export default ToDoList
