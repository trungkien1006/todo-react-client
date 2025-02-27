import { useEffect, useState } from "react"
import SubCover from "../components/main/home/SubCover"
import RightCover from "../components/main/home/RightCover"
import LeftCover from "../components/main/home/LeftCover"
import Pages from "../components/main/home/Pages"
import homeAPI from "../apis/modules/home.api"
import { useDispatch, useSelector } from "react-redux"
import { changeLoading, changeTodos, changeTotalPage } from "../redux/slices/todoListSlice"
import Modal from "../components/reuse/Modal"

function Home() {
    const [navigate, setNavigate] = useState(true)
    const [fold, setFold] = useState(localStorage.getItem("bookFold") == "true" ? true : false)
    const todoList = useSelector(state => state.todoList)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleFold = () => {
        localStorage.setItem("bookFold", !fold)

        setFold(!fold)
    }

    const handleGetTodo = async ({ ...rest }) => {
        homeAPI.getFilterTodo({ ...rest })
        .then(response => {
            dispatch(changeTodos(response.data.data.Todos))
            dispatch(changeTotalPage(response.data.data.TotalPage))
            
            setTimeout(() => {
                dispatch(changeLoading(false))
            }, 3000)
        })
        .catch(() => {
            dispatch(changeTodos([]))
            dispatch(changeTotalPage(1))
        })
    }

    useEffect(() => {
        dispatch(changeLoading(true))
        
        handleGetTodo({
            ...filter,
            currentPage: todoList.currentPage,
            limit: todoList.limit
        })
    }, [todoList.currentPage])
   
    return (
        <div className={`w-screen h-screen flex justify-center items-center relative perspective-distant transform-3d ${navigate ? "animate-(--animate-appear)": "animate-(--animate-disappear)"}`}>
            <div className="w-[1600px] h-154  rounded-xl flex transform-3d relative">
                <SubCover fold={fold} handleFold={handleFold}/>
                
                <LeftCover fold={fold}/>
                
                <RightCover fold={fold} setIsNavigate={setNavigate}/>
                
                <Pages fold={fold}/>
            </div>

            <Modal />
        </div>
    )
}

export default Home