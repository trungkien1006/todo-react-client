import { useDispatch, useSelector } from "react-redux";
import SubCoverSearch from "../../reuse/SubCoverSearch";
import sortTodo from "../../../ultis/sortTodo";
import { changeSortType } from "../../../redux/slices/sorterSlice";
import { changeTodos } from "../../../redux/slices/todoListSlice";

function SubCover({ fold, handleFold }) {
    const todos = useSelector(state => state.todoList)
    const sortType = useSelector(state => state.sorter.type)
    const dispatch = useDispatch()

    const handleSortTodo = (type) => {
        dispatch(changeSortType(type))
        dispatch(changeTodos(sortTodo(todos.todos, type)));
    }

    return (
         <div className={`w-1/5 h-full shadow-(--shadow-book) inset-shadow-sm rounded-l-lg origin-right relative duration-2000 transform-3d ${fold ? "animate-(--animate-close-sub-cover)": "animate-(--animate-open-sub-cover)"} z-4`}>
            <div className={"w-full h-full flex flex-col items-center justify-center p-[32px] bg-(--old-book-color) rounded-r-lg absolute top-0 left-0 transform-(--rotateY-back) backface-hidden"}>
                <div className="w-[128px] mb-[8px] cursor-pointer">
                    <img src="/images/user-empty.webp" alt="" />
                </div>
                <p className="text-xl mb-[20px]">
                    Cutchienbo
                </p>
                <div className="w-full flex cursor-pointer relative group" onClick={handleFold}>
                    <div className="flex">
                        <div className="bg-white h-full w-[40px] rounded-full text-lg absolute z-1 duration-500 group-hover:w-full group-hover:duration-500">

                        </div>
                        <div className="py-[8px] w-[40px] absolute z-2 text-center">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="py-[6px] w-full text-center text-lg font-medium z-2">
                        Let's Note!
                    </div>
                </div>
            </div>
            <div className={"relative w-full h-full px-[32px] py-[12px] bg-(--old-book-color) rounded-l-lg absolute top-0 left-0 backface-hidden "}>
                <button className="duration-300 hover:duration-300 hover:opacity-[.6] cursor-pointer text-xl absolute px-[12px] py-[6px] rounded-lg bg-red-500 top-[8px] left-[8px] text-white" onClick={handleFold}>
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <p className="text-center text-xl mb-[12px] text-white mt-[24px]">Sorter</p>
                <select
                    onChange={e => handleSortTodo(e.target.value)}
                    defaultValue={sortType}
                    name=""
                    id=""
                    className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[24px]`}
                >
                    <option value="none">
                        None
                    </option>
                    <option value="priority-r">
                        Priority (Up to Down)
                    </option>
                    <option value="priority-i">
                        Priority (Down to Up)
                    </option>
                    <option value="status-r">
                        Status (Up to Down)
                    </option>
                    <option value="status-i">
                        Status (Down to Up)
                    </option>
                </select>

                <hr className="border-1 border-dashed border-(--old-paper-color) mb-[16px] w-full z-10"/>

                <SubCoverSearch />
                
                
            </div>
        </div>
    )
}

export default SubCover;