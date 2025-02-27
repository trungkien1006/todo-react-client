import { useDispatch } from "react-redux";
import { changeIsClose, changeModalType } from "../../../redux/slices/modalSlice"

function LeftCover({ fold }) {
    const dispatch = useDispatch()

    const handleCloseModal = () => {
        dispatch(changeModalType("createTodo"))
        dispatch(changeIsClose(false))
    }

    return (
        <div className={`flex justify-end items-center relative w-2/5 h-full shadow-(--shadow-book) transform-3d inset-shadow-sm bg-(--old-book-color) origin-right relative duration-2000 ${fold ? "animate-(--animate-move-right)" : "animate-(--animate-move-left)"} z-1`}>
            <div onClick={handleCloseModal} className={`${fold ? "transform-[translateY(42px)]" : ""} cursor-pointer absolute top-[-24px] w-[200px] pb-[24px] duration-300 hover:duration-300 hover:transform-[translateY(-42px)] shadow-(--shadow-book) bg-white ${fold ? "transform-[translateY(24px)]" : ""}`} style={{borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px"}}>
                    <p className="font-medium text-center pt-[8px] pb-[8px] text-lg">
                        Take note!
                    </p>
                    <p className=" px-[8px] text-center">
                        To not miss the work.
                    </p>
                </div>
        </div>
    )
}

export default LeftCover;