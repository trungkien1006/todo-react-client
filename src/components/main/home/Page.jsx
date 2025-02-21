import { useEffect, useState } from "react";
import TodoNote from "../../reuse/TodoNote";
import TodoNoteSkeleton from "../../reuse/TodoNoteSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading } from "../../../redux/slices/todoListSlice";

function Page({ fold, side, todoList}) {
    const [flip, setFlip] = useState(false)
    const loading = useSelector(state => state.todoList.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        if (side == "left") {
            setFlip(!flip)
        }
    }, [fold])

    useEffect(() => {
        setTimeout(() => {
            dispatch(changeLoading(false))
        }, 4000)
    }, [todoList])

    return (
        <div className={`duration-1000 transform-3d ${flip ? `transform-(--rotateY-back)` : ``} w-(--book-content-width) h-(--book-content-height) absolute origin-right shadow-(--shadow-book)`}>
            <div className={`p-[20px] absolute w-full h-full flex justify-end rounded-r-lg bg-(--old-paper-color) top-0 left-0 transform-(--rotateY-back) backface-hidden`}>
                <div className="">
                    <div className="flex flex-wrap gap-[12px] justify-start">
                        {
                            loading ? 
                                <>
                                    {/* <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton />
                                    <TodoNoteSkeleton /> */}
                                </>
                                :
                                side == "left" && (todoList && todoList.map((val, ind) => <TodoNote key={ind} todo={val} />))
                        }
                    </div>
                </div> 
            </div>
            <div className={`p-[20px] w-full h-full bg-(--old-paper-color) rounded-l-lg absolute top-0 left-0 backface-hidden ${flip ? "pointer-events-none" : ""}` }>
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
                                side == "right" && (todoList && todoList.map((val, ind) => <TodoNote key={ind} todo={val} />))
                        }
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Page;