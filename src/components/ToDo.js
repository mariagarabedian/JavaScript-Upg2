import React from 'react'

const ToDo = ({ toDo, toDos, setToDos }) => {

    const isDoneHandler = () => {
        setToDos(toDos.map(item => {
            if (item.id === toDo.id) {
                return {
                    ...item, isDone : !item.isDone
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setToDos(toDos.filter(item => item.id !== toDo.id))
    }

    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${ toDo.isDone ? 'textDone' : 'textNotDone' }`}>
                    <div className="todo-subject">{toDo.subject}</div>
                    <div className="todo-description">{toDo.description}</div>
                </div>
                <div>
                    <i onClick={isDoneHandler} className={ `fas fa-check me-3 cursor-pointer ${ toDo.isDone ? 'isDone' : 'notDone' }` }></i>
                    <i onClick={deleteHandler} className="far fa-trash-alt cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default ToDo
