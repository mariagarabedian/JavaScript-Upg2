import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'



const Main = () => {


  const [toDos, setToDos] = useState([])

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col-5">
                    <ToDoForm toDos={toDos} setToDos={setToDos}/>
                </div>
                <div className="col-7 ps-3">
                    <ToDoList toDos={toDos} setToDos={setToDos}/>
                </div>
            </div>
        </main>
    )
}

export default Main
