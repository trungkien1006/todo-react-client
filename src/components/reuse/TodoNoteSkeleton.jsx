function TodoNoteSkeleton() {
    return (
        <div className={`animate-pulse w-[180px] h-[165px] shadow-(--shadow-auth) bg-(--grey-input) duration-1000`} style={{borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px"}}>
            <div className="bg-(--old-paper-color) py-[12px] mx-[8px] mt-[16px] rounded-lg">
            </div>
            <div className="bg-(--old-paper-color) py-[36px] mx-[8px] mt-[8px] rounded-lg">
            </div>
            <div className="bg-(--old-paper-color) py-[12px] mx-[8px] mt-[8px] rounded-lg">
            </div>
        </div>
    )
}

export default TodoNoteSkeleton;