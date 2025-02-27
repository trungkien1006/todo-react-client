import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import useDebounce from "../../../hooks/useDebounce";
import { increaseCurrentPage, reduceCurrentPage } from "../../../redux/slices/todoListSlice";
import Pagination from "../../reuse/Pagination";
import { useEffect, useState } from "react";

function Pages({ fold }) {
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch()
    const [paginationRange, setPaginationRange] = useState({})
    
    const handleIncreasePage = useDebounce(() => {
        dispatch(increaseCurrentPage())
    }, 250)

    const handleReducePage = useDebounce(() => {
        dispatch(reduceCurrentPage())
    }, 250)

    useEffect(() => {
        if (todoList.totalPage < 9) {
            paginationRange.fromRight = 1
            paginationRange.toRight = todoList.totalPage
        }
        else if (todoList.totalPage > 8 && todoList.totalPage < 19) {
            paginationRange.fromRight = 1
            paginationRange.toRight = 8
            paginationRange.fromLeft = 9
            paginationRange.toLeft = todoList.totalPage
        }
        else if (todoList.totalPage > 16) {
            if(todoList.currentPage == todoList.totalPage){
                paginationRange.fromRight = todoList.totalPage - 14
                paginationRange.toRight = todoList.totalPage - 8
                paginationRange.fromLeft = todoList.totalPage - 7
                paginationRange.toLeft = todoList.totalPage
            
            } else if (todoList.currentPage >= 16) {
                paginationRange.fromRight = todoList.currentPage - 13
                paginationRange.toRight = paginationRange.fromRight + 6
                paginationRange.fromLeft = paginationRange.toRight + 1
                paginationRange.toLeft = todoList.currentPage
            }
            else {
                paginationRange.fromRight = 1
                paginationRange.toRight = 8
                paginationRange.fromLeft = 9
                paginationRange.toLeft = 15
            }
        }
        
        setPaginationRange({ ...paginationRange })
    }, [todoList])
    
    return (
        <>
            <div className={`absolute w-2/5 h-full left-(--pages-left) top-[16px] transform-3d duration-2000 ${fold ? "animate-(--animate-move-right) z-0" : "animate-(--animate-move-left) z-10"}`}>
                {  
                    todoList.currentPage == 1 ? <></> :
                        <button onClick={handleReducePage} className={`${fold ? "hidden": ""} duration-300 hover:duration-300 hover:shadow-(--shadow-book) absolute top-(--chevron-top) left-[-44px] cursor-pointer text-3xl bg-(--old-paper-color) rounded-full py-[4px] px-[12px]`}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                }

                <Page fold={fold} side={"right"} todoList={todoList.todos ? todoList.todos.slice(0, 9) : null} />
                <Page fold={fold} side={"left"} todoList={todoList.todos ? todoList.todos.slice(9, 18) : null} />
                
                {
                    todoList.currentPage == todoList.totalPage ? <></> :
                        <button onClick={handleIncreasePage} className={`${fold ? "hidden": ""} duration-300 hover:duration-300 hover:shadow-(--shadow-book) absolute top-(--chevron-top) right-(--chevron-right) cursor-pointer text-3xl bg-(--old-paper-color) rounded-full py-[4px] px-[12px]`}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                }

                <Pagination fold={fold} side={"right"} from={paginationRange.fromRight} to={paginationRange.toRight}/>
                <Pagination fold={fold} side={"left"} from={paginationRange.fromLeft} to={paginationRange.toLeft}/>
                
                <hr className="border-1 border-dashed right-[16px] border-(--old-book-color) h-(--book-content-height) absolute z-10" />
            </div>
        </>
    )
}

export default Pages;