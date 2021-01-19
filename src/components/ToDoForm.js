import React, {useState} from 'react'
import uuid from 'react-uuid'


const ToDoForm = ({ toDos, setToDos}) => {

    // states
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const subjectHandler = (e) => {
        e.target.value.length > 2 ? setSubmitDisabled(false) : setSubmitDisabled(true)
      
        setSubject(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        // create objects
        setToDos([...toDos,{ subject: subject, description: description, isDone: false, id: uuid()}])

        // clear inputs
        setSubject('')
        setDescription('')
        setSubmitDisabled(true)
    }
   
   
   
   
    return (
        <div>
                    <form>
            <div className="mb-3">
                <input onChange={subjectHandler} value={subject} type="text" className="form-control"  placeholder="Subject"/>
            </div>
            <div className="mb-3">
                <textarea onChange={descriptionHandler} value={description} className="form-control" rows="5" placeholder="Description"></textarea>
            </div>
            <div className="mb-3">
                <button onClick={submitHandler} disabled={submitDisabled} type="submit" className="btn-s w-100 p-2">Add Todo</button>
            </div>
        </form>
        </div>
    )
}

export default ToDoForm
 