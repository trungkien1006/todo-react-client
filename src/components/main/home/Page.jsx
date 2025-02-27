import { useEffect, useState } from "react";
import TodoNote from "../../reuse/TodoNote";
import TodoNoteSkeleton from "../../reuse/TodoNoteSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading } from "../../../redux/slices/todoListSlice";

function Page({ fold, side, todoList}) {
    const loading = useSelector(state => state.todoList.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(changeLoading(false))
        }, 3000)
    }, [])

    return (
        <div className={`duration-1500 z-2 transform-3d ${(!fold && side == "left") ? `animate-(--animate-close-page)` : `animate-(--animate-open-page)`} w-(--book-content-width) h-(--book-content-height) absolute origin-right shadow-(--shadow-book)`}>
            <div className={`p-[20px] absolute w-full h-full flex justify-start rounded-r-lg bg-(--old-paper-color) top-0 left-0 transform-(--rotateY-back) backface-hidden`}>
                <div className="">
                    <div className="flex flex-wrap gap-[12px]">
                        {
                            loading ? 
                                <>
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                     <TodoNoteSkeleton />
                                </>
                                :
                                side == "left" && (todoList && todoList.map((val, ind) => <TodoNote key={ind} todo={val} />))
                        }
                    </div>
                </div> 
            </div>
            <div className={`p-[20px] w-full h-full bg-(--old-paper-color) rounded-l-lg absolute top-0 left-0 backface-hidden ${(!fold && side == "left") ? "pointer-events-none" : ""}` }>
                <div className="">
                    <div className="flex flex-wrap gap-[12px]">
                         {
                            loading ? 
                                <>
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                </>
                                :
                                (todoList.length ?
                                    side == "right" && (todoList && todoList.map((val, ind) => <TodoNote key={ind} todo={val} />)) :
                                    <p className="text-lg">Hey note your work here!</p>
                                )
                        }
                    </div>
                </div> 
            </div>
                        
        </div>
    )
}

export default Page;