import { useDispatch } from "react-redux";
import { changeIsClose } from "../../redux/slices/modalSlice";

function DeleteTodoModal({ handleSumit }) {
    const dispatch = useDispatch()

    return (
         <div onClick={e => { e.stopPropagation() }} className="relative overflow-y-auto w-[400px] bg-white inset-shadow-(--shadow-book) py-[18px] px-[36px]" style={{ borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px" }}>
            <button onClick={() => dispatch(changeIsClose(true))} className="duration-300 hover:duration-300 hover:opacity-[.6] text-xl absolute px-[8px] py-[2px] rounded-lg bg-red-500 top-[6px] right-[6px] text-white cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <p className="text-center text-2xl font-medium mb-[20px]">Are you sure?</p>
                
            <div className="flex gap-x-[12px]">
                <button onClick={async e => { e.preventDefault(); await handleSumit() }} className="mt-[2px] text-white mb-[8px] font-medium bg-(--status-completed) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">
                    Yes
                </button>
                <button onClick={() => dispatch(changeIsClose(true))} className="mt-[2px] text-white mb-[8px] font-medium bg-(--status-canceled) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">
                    No
                </button>
            </div>
        </div>
    )
}

export default DeleteTodoModal;