import { useDispatch } from "react-redux";
import { formatDateView } from "../../ultis/formatDate";
import TodoBottom from "./TodoBottom";
import TodoHeader from "./TodoHeader";
import { changeDeleteTodoId, changeIsClose, changeModalType, changeUpdateTodo } from "../../redux/slices/modalSlice";

function TodoNote({ todo }) {
    const dispatch = useDispatch()

    const handleOpenUpdateModal = () => {
        if (todo.status < 2) {
            dispatch(changeUpdateTodo({
                id: todo.ID,
                title: todo.title,
                description: todo.description,
                priority: todo.priority,
                status: todo.status,
                due_date: todo.due_date
            }))

            dispatch(changeModalType("updateTodo"))
            dispatch(changeIsClose(false))
        }
    }

    const handleOpenModalDelete = () => {  
        dispatch(changeDeleteTodoId(todo.ID))
        dispatch(changeModalType("deleteTodo"))
        dispatch(changeIsClose(false))
    }
    
    return (
        <div onClick={handleOpenUpdateModal} className={`z-2 group duration-300 hover:duration-300 ease-out hover:transform-[translateY(-12px)] relative w-[180px] mb-[4px] shadow-(--shadow-auth) duration-1000 cursor-pointer`} style={{borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px"}}>
            <div className="z-2 bg-white relative" style={{ borderTopLeftRadius: "250px 15px" }}>
                
                <TodoHeader priority={todo.priority} dueDate={todo.due_date} />
                
            </div>
                
            <div className="z-2 overflow-hidden bg-white relative" style={{ borderBottomLeftRadius: "14px 90px", borderBottomRightRadius: "80px 10px" }}>
                <hr className="border-1 border-dashed border-(--old-book-color) my-[4px] w-full z-10"/>
            
                <div className="px-[12px]">
                    <p className="text-lg font-medium">
                        {todo.title}
                    </p>
                    <p className="text-xs text-(--grey-sub-content) text-right mt-[-2px]">
                        {formatDateView(todo.due_date, "vi-VN")}
                    </p>
                    <p className="text-sm overflow-hidden h-[42px] line-clamp-2 mt-[4px]">
                        {todo.description}
                    </p>
                </div>
                
                <TodoBottom status={todo.status}/>
            </div>

            <div onClick={e => { e.stopPropagation(); handleOpenModalDelete() }} className="z-1 right-0 duration-300 hover:duration-300 hover:opacity-[.8] group-hover:transform-[translateY(-30px)] transform-[translateY(-60px)] absolute bg-(--status-canceled) text-sm text-white items-center pb-[2px] pt-[32px] px-[12px] rounded-b-lg flex justify-end">
                Delete
                <i class="fa-solid fa-trash-can ml-[8px]"></i>
            </div>
        </div>
    )
}

export default TodoNote; 