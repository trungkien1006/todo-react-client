import { useDispatch } from "react-redux";
import { changeIsClose, changeUpdateTodoDescription, changeUpdateTodoDueDate, changeUpdateTodoPriority, changeUpdateTodoStatus, changeUpdateTodoTitle } from "../../redux/slices/modalSlice";

function UpdateTodoModal({ modal, error, handleSumit }) {
    const dispatch = useDispatch()

    return (
        <div onClick={e => { e.stopPropagation() }} className="relative overflow-y-auto w-[400px] bg-white inset-shadow-(--shadow-book) py-[18px] px-[36px]" style={{ borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px" }}>
            <button onClick={() => dispatch(changeIsClose(true))} className="duration-300 hover:duration-300 hover:opacity-[.6] text-xl absolute px-[8px] py-[2px] rounded-lg bg-red-500 top-[6px] right-[6px] text-white cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <p className="text-center text-2xl font-medium mb-[20px]">Update your work!</p>
                
            <form action="#" className="">
                <label className="" htmlFor="title">Title:</label>
                <input
                    onChange={e => dispatch(changeUpdateTodoTitle(e.target.value))}
                    defaultValue={modal.updateTodo.title}
                    id="title"
                    type="text"
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                    placeholder="Do Something..."
                    required
                />
                <label className="" htmlFor="description">Description:</label>
                <textarea
                    onChange={e => dispatch(changeUpdateTodoDescription(e.target.value))}
                    defaultValue={modal.updateTodo.description}
                    placeholder="Step 1..."
                    name=""
                    id=""
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                ></textarea>
                <label htmlFor="due-date" className="">Due Date:</label>
                <input
                    onChange={e => dispatch(changeUpdateTodoDueDate(e.target.value))}
                    defaultValue={modal.updateTodo.due_date.slice(0, 16)}
                    id="due-date"
                    type="datetime-local"
                    required
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                />
                <select 
                    onChange={e => dispatch(changeUpdateTodoPriority(e.target.value))}
                    defaultValue={modal.updateTodo.priority}
                    name="" 
                    id="priority" 
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                >
                    <option value="1">Low Priority</option>
                    <option value="2">Normal Priority</option>
                    <option value="3">High Priority</option>
                </select>
            
                <select
                    onChange={e => dispatch(changeUpdateTodoStatus(e.target.value))}
                    defaultValue={modal.updateTodo.status}
                    name=""
                    id=""
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                >
                    <option value="0">Pending</option>
                    <option value="1">Progressing</option>
                    <option value="2">Completed</option>
                    <option value="3">Canceled</option>
                </select>

                <p className="text-(--status-canceled)">{error}</p>

            <button onClick={async e => { e.preventDefault(); await handleSumit() }} className="mt-[2px] mb-[8px] font-medium bg-(--old-paper-color) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">
                Save
                </button>
            </form>
        </div>
    )
}

export default UpdateTodoModal;