import { useDispatch, useSelector } from "react-redux";
import { changeDateFrom, changeDateTo, changePriority, changeStatus, changeTimeType, changeTitle } from "../../redux/slices/filterSlice";
import homeAPI from "../../apis/modules/home.api";
import { changeLoading, changeTodos, changeTotalPage } from "../../redux/slices/todoListSlice";
import useDebounce from "../../hooks/useDebounce"
import formatDate from "../../ultis/formatDate";

function SubCoverSearch() {
    const filter = useSelector((state) => state.filter); // Lấy state từ Redux
    const dispatch = useDispatch(); // Dùng để gửi action

    const handleGetTodo = async ({ ...rest }) => {
        homeAPI.getFilterTodo({ ...rest })
        .then(response => {
            dispatch(changeTodos(response.data.data.Todos))
            dispatch(changeTotalPage(response.data.data.TotalPage))
            dispatch(changeLoading(true))
        })
        .catch(() => {
            dispatch(changeTodos([]))
            dispatch(changeTotalPage(1))
        })
    }

    const handleSetTimeType = (type) => {
        switch (type) {
            case "none": {
                dispatch(changeDateFrom(""));
                dispatch(changeDateTo(""));
                dispatch(changeTimeType("none"));
                break;
            }
            case "on-time": {
                dispatch(changeDateFrom(formatDate(new Date(), "vi-VN")));
                dispatch(changeDateTo(""));
                dispatch(changeTimeType("on-time"));
                break;
            }
            case "overdue": {
                dispatch(changeDateTo(formatDate(new Date(), "vi-VN")));
                dispatch(changeDateFrom(""));
                dispatch(changeTimeType("overdue"));
                break;
            }
        }
    }
    
    const handleSubmit = useDebounce(async () => {
        await handleGetTodo({ ...filter, currentPage: 1, limit: 18 })
        dispatch(changeLoading(true))
    }, 500)

    return (
         <form action="#" className="mb-[24px]">
            <p className="text-center text-xl mb-[8px] text-white">Filter</p>
            <input
                defaultValue={filter.title}
                type="text"
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[8px]`}
                placeholder="Title"
                onChange={e => useDebounce(dispatch(changeTitle(e.target.value)), 500)}
            />
            <label className="text-white">From:</label>
            <input
                defaultValue={filter.dateFrom}
                type="datetime-local"
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[8px]`}
                onChange={e => useDebounce(dispatch(changeDateFrom(e.target.value)), 500)}
            />
            <label className="text-white">To:</label>
            <input
                defaultValue={filter.dateTo}
                type="datetime-local"
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                onChange={e => useDebounce(dispatch(changeDateTo(e.target.value)), 500)}
            />
            <select
                name=""
                id=""
                defaultValue={filter.status}
                onChange={e => dispatch(changeStatus(e.target.value))}
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
            >
                <option value="-1">All Status</option>
                <option value="0">Pending</option>
                <option value="1">Progressing</option>
                <option value="2">Completed</option>
                <option value="3">Canceled</option>
            </select>
            <select 
                name="" 
                id="" 
                defaultValue={filter.priority}
                onChange={e => dispatch(changePriority(e.target.value))}
                className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[8px]`}
            >
                <option value="0">All Priority</option>
                <option value="1">Low Priority</option>
                <option value="2">Normal Priority</option>
                <option value="3">High Priority</option>
            </select>
            <div className="mb-[16px]">
                <p className="text-white mb-[4px]">Time Moment:</p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <input
                            onChange={() => handleSetTimeType("none")}
                            type="radio"
                            className="w-[18px] h-[18px] cursor-pointer"
                            name="time"
                            id="none"
                            defaultChecked={filter.time == "none" ? true : false}
                        />
                        <label className="ml-[4px] cursor-pointer text-white" htmlFor="none">None</label>
                    </div>
                     <div className="flex items-center">
                        <input 
                            onChange={() => handleSetTimeType("on-time")} 
                            type="radio" 
                            className="w-[18px] h-[18px] cursor-pointer" 
                            name="time" 
                            id="on-time"
                            defaultChecked={filter.time == "on-time" ? true : false}
                        />
                        <label className="ml-[4px] cursor-pointer text-white" htmlFor="on-time">On time</label>
                    </div>
                     <div className="flex items-center">
                        <input
                            onChange={() => handleSetTimeType("overdue")}
                            type="radio" 
                            className="w-[18px] h-[18px] cursor-pointer" 
                            name="time" 
                            id="overdue"
                            defaultChecked={filter.time == "overdue" ? true : false}
                        />
                        <label className="ml-[4px] cursor-pointer text-white" htmlFor="overdue">Overdue</label>
                    </div>
                </div>
            </div>
            <button onClick={async e => { e.preventDefault();  await handleSubmit()}} className="font-medium bg-(--old-paper-color) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">Search</button>
        </form>
    )
}

export default SubCoverSearch;