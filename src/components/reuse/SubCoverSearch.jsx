import { useDispatch, useSelector } from "react-redux";
import { changeDateFrom, changeDateTo, changePriority, changeStatus, changeTitle } from "../../redux/slices/filterSlice";
import homeAPI from "../../apis/modules/home.api";
import { changeLoading, changeTodos, changeTotalPage } from "../../redux/slices/todoListSlice";
import useDebounce from "../../hooks/useDebounce"

function SubCoverSearch() {
    const filter = useSelector((state) => state.filter); // Lấy state từ Redux
    const dispatch = useDispatch(); // Dùng để gửi action

    const handleGetTodo = async ({ ...rest }) => {
        homeAPI.getFilterTodo({ ...rest })
        .then(response => {
            dispatch(changeTodos(response.data.data.Todos))
            dispatch(changeTotalPage(response.data.data.TotalPage))
        })
        .catch(error => {
            dispatch(changeTodos([]))
            dispatch(changeTotalPage(1))
        })
    }
    
    const handleSubmit = useDebounce(async () => {
        await handleGetTodo({ ...filter, currentPage: 1, limit: 18 })
        dispatch(changeLoading(true))
    }, 500)

    return (
         <form action="#" className="mt-[32px] mb-[24px]">
            <p className="text-center text-xl mb-[8px] text-white">Filter</p>
            <input
                defaultValue={filter.title}
                type="text"
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                placeholder="Title"
                onChange={e => dispatch(changeTitle(e.target.value))}
            />
            <p className="text-white">From:</p>
            <input
                defaultValue={filter.dateFrom}
                type="datetime-local"
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                onChange={e => dispatch(changeDateFrom(e.target.value))}
            />
            <p className="text-white">To:</p>
            <input
                defaultValue={filter.dateTo}
                type="datetime-local"
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                onChange={e => dispatch(changeDateTo(e.target.value))}
            />
            <select
                name=""
                id=""
                defaultValue={filter.status}
                onChange={e => dispatch(changeStatus(e.target.value))}
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
            >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Progressing">Progressing</option>
                <option value="Completed">Completed</option>
                <option value="Canceled">Canceled</option>
            </select>
            <select 
                name="" 
                id="" 
                defaultValue={filter.priority}
                onChange={e => dispatch(changePriority(e.target.value))}
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
            >
                <option value="0">All Priority</option>
                <option value="1">Low Priority</option>
                <option value="2">Normal Priority</option>
                <option value="3">High Priority</option>
            </select>
            <button onClick={async e => { e.preventDefault();  await handleSubmit()}} className="font-medium bg-(--old-paper-color) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">Search</button>
        </form>
    )
}

export default SubCoverSearch;