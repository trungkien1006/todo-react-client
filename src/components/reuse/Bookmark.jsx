import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage, increaseCurrentPage, reduceCurrentPage } from "../../redux/slices/todoListSlice";

function Bookmark({ value, side }) {
    const currentPage = useSelector(state => state.todoList.currentPage)
    const dispatch = useDispatch()

    const handleChangePage = () => {
        if (value == "...") {
            if (side == "right") {
                dispatch(reduceCurrentPage())
            }
            else {
                dispatch(increaseCurrentPage())
            }
        }
        else {
            dispatch(changeCurrentPage(value))
        }
    }

    return (
        <div onClick={handleChangePage} className={`duration-300 hover:duration-300 hover:opacity-[.8] ${currentPage == value ? "transform-[translateY(24px)]" : ""} h-[100px] w-[10%] shadow-[--shadow-book] cursor-pointer font-medium text-lg justify-center bg-(--status-canceled) flex items-center text-white`} style={{ clipPath: "polygon(-20% 0, 100% -20%, 100% 80%, 50% 65%, 0 80%)" }}>
            {value}
        </div>
    )
}

export default Bookmark;