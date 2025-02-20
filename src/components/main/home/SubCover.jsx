function SubCover({ fold, handleFold }) {
    return (
         <div className={`w-1/5 h-full shadow-(--shadow-book) inset-shadow-sm rounded-l-lg origin-right relative duration-2000 transform-3d ${fold ? "transform-(--fold-move-the-book-sub-cover)": ""} z-3`}>
            <div className={"w-full h-full flex flex-col items-center justify-center p-[32px] bg-(--old-book-color) rounded-r-lg absolute top-0 left-0 transform-(--rotateY-back) backface-hidden"}>
                <div className="w-[128px] mb-[8px]">
                    <img src="/images/user-empty.webp" alt="" />
                </div>
                <p className="text-xl mb-[20px]">
                    Cutchienbo
                </p>
                <div className="w-full flex cursor-pointer relative group" onClick={handleFold}>
                    <div className="flex">
                        <div className="bg-white h-full w-[40px] rounded-full text-lg absolute z-1 duration-500 group-hover:w-full group-hover:duration-500">

                        </div>
                        <div className="py-[8px] w-[40px] absolute z-2 text-center">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="py-[6px] w-full text-center text-lg font-medium z-2">
                        Let's Note!
                    </div>
                </div>
            </div>
            <div className={"w-full h-full p-[32px] bg-(--old-book-color) rounded-l-lg absolute top-0 left-0 backface-hidden "}>
                <button onClick={handleFold}>Close</button>
                <form action="">
                      <input
                        type="text"
                        className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                        placeholder="Username"
                        // onChange={e => onChangeUsername(e.target.value)}
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export default SubCover;