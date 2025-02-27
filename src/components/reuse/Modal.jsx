import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsClose, clearCreateTodo } from "../../redux/slices/modalSlice";
import homeAPI from "../../apis/modules/home.api";
import { addTodo, changeTodos, deleteTodo } from "../../redux/slices/todoListSlice";
import CreateTodoModal from "./CreateTodoModal";
import UpdateTodoModal from "./UpdateTodoModal";
import sortTodo from "../../ultis/sortTodo";
import DeleteTodoModal from "./DeleteTodoModal";

function Modal() {
    const [error, setError] = useState("")
    const modal = useSelector(state => state.modal) 
    const todoList = useSelector(state => state.todoList.todos)
    const sortType = useSelector(state => state.sorter.type)
    const dispatch = useDispatch()
    
    const handleClose = () => {
        dispatch(changeIsClose(true))
    }

    const handleCreateSumit = async () => {
        await homeAPI.createTodo({ ...modal.createTodo })
            .then(() => {
            let todo = [...todoList, { ...modal.createTodo, status: 0}]

             dispatch(changeTodos(sortTodo(todo, sortType)))
                
            dispatch(changeIsClose(true))
            dispatch(clearCreateTodo())
        }).catch(() => {
            setError("Forgot title or wrong due date")
        })
    }

    const handleUpdateSubmit = async () => {        
        await homeAPI.updateTodo({ ...modal.updateTodo })
        .then(() => {
            let todos = todoList.map(item => 
                    item.ID === modal.updateTodo.id ? {
                        ...item, 
                        title: modal.updateTodo.title,
                        description: modal.updateTodo.description,
                        due_date: modal.updateTodo.due_date,
                        priority: modal.updateTodo.priority,
                        status: modal.updateTodo.status
                    } : item
            )
            
            dispatch(changeTodos(sortTodo(todos, sortType)))
            dispatch(changeIsClose(true))
        }).catch(() => {
            setError("Forgot title or wrong due date")
        })
    }

    const handleDeleteSubmit = async () => {
        await homeAPI.deleteTodo(modal.deleteTodo.id)
        .then(() => {
            dispatch(deleteTodo(modal.deleteTodo.id))
            dispatch(changeIsClose(true))
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        modal.isClose ? <></> :
            <div onClick={handleClose} className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-(--grey-modal) flex justify-center items-center">
                {
                    modal.type == "createTodo" ? 
                        <CreateTodoModal modal={modal} error={error} handleSumit={handleCreateSumit} />
                        :
                        (
                            modal.type == "updateTodo" ? 
                                <UpdateTodoModal modal={modal} error={error} handleSumit={handleUpdateSubmit} />
                                : 
                                <DeleteTodoModal handleSumit={handleDeleteSubmit} />
                        )
                }
            </div>
    )
}

export default Modal;