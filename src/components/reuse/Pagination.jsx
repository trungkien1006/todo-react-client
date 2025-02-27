import { useSelector } from "react-redux";
import Bookmark from "./Bookmark";

function Pagination({ fold, side, from, to }) {
    const todoList = useSelector(state => state.todoList)

    const getBookmarkArr = () => {
        var tempArr = []

        if (from > 1 && side == "right") {
            tempArr.push("...")
        }

        for (let i = from; i <= to; i++){
            tempArr.push(i)
        }

         if ((todoList.totalPage > 16 && todoList.totalPage != todoList.currentPage) && side == "left") {
            tempArr.push("...")
        }

        return tempArr
    }

    return (
        <div className={`${fold ? "bottom-[24px]" : ""} absolute w-[97.5%] h-[100px] bottom-[-36px] z-1 duration-1000 transform-3d ${(!fold && side == "left") ? `animate-(--animate-close-page)` : `animate-(--animate-open-page)`} origin-right`}>
            <div className={`flex px-[12px] gap-x-[16px] ${side == "left" ? "transform-(--rotateY-back)" : ""}`}>
                {getBookmarkArr().map(item => <Bookmark key={item} value={item} side={side} />) }
            </div>
        </div>
    )
}

export default Pagination;