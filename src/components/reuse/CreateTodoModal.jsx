import { useDispatch } from "react-redux";
import { changeCreateTodoDescription, changeCreateTodoDueDate, changeCreateTodoPriority, changeCreateTodoTitle, changeIsClose } from "../../redux/slices/modalSlice";

function CreateTodoModal({ modal, error, handleSumit }) {
    const dispatch = useDispatch()

    return (
        <div onClick={e => { e.stopPropagation() }} className="relative overflow-y-auto w-[400px] bg-white inset-shadow-(--shadow-book) py-[18px] px-[36px]" style={{ borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px" }}>
            <button onClick={() => dispatch(changeIsClose(true))} className="duration-300 hover:duration-300 hover:opacity-[.6] text-xl absolute px-[8px] py-[2px] rounded-lg bg-red-500 top-[6px] right-[6px] text-white cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <p className="text-center text-2xl font-medium mb-[20px]">Note your work!</p>
                
            <form action="#" className="">
                <label className="" htmlFor="title">Title:</label>
                <input
                    defaultValue={modal.createTodo.title}
                    id="title"
                    type="text"
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                    placeholder="Do Something..."
                    required
                    onChange={e => dispatch(changeCreateTodoTitle(e.target.value))}
                />
                <label className="" htmlFor="description">Description:</label>
                <textarea
                    defaultValue={modal.createTodo.description}
                    placeholder="Step 1..."
                    name=""
                    id=""
                    onChange={e => dispatch(changeCreateTodoDescription(e.target.value))}
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                ></textarea>
                <label htmlFor="due-date" className="">Due Date:</label>
                <input
                    defaultValue={modal.createTodo.due_date}
                    id="due-date"
                    type="datetime-local"
                    required
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                    onChange={e => dispatch(changeCreateTodoDueDate(e.target.value))}
                />
                <label htmlFor="priority" className="">Priority:</label>
                <select 
                        defaultValue={modal.createTodo.priority}
                    name="" 
                    id="priority" 
                    onChange={e => dispatch(changeCreateTodoPriority(Number(e.target.value)))}
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                >
                    <option value="1">Low Priority</option>
                    <option value="2">Normal Priority</option>
                    <option value="3">High Priority</option>
                </select>

                <p className="text-(--status-canceled)">{error}</p>

                <button onClick={async e => { e.preventDefault(); await handleSumit() }} className="mt-[2px] mb-[8px] font-medium bg-(--old-paper-color) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateTodoModal;