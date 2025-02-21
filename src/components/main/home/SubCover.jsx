import SubCoverSearch from "../../reuse/SubCoverSearch";

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
            <div className={"relative w-full h-full px-[32px] py-[12px] bg-(--old-book-color) rounded-l-lg absolute top-0 left-0 backface-hidden "}>
                <button className="text-xl absolute px-[12px] py-[6px] rounded-lg bg-red-500 top-[8px] left-[8px] text-white" onClick={handleFold}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
               
                <SubCoverSearch />
                
                <hr className="border-1 border-dashed border-(--old-paper-color) mb-[24px] w-full z-10"/>

                <div className="cursor-pointer duration-300 hover:duration-300 hover:opacity-[0.8] shadow-(--shadow-book) w-full h-[110px] bg-white" style={{borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px"}}>
                    <p className="font-medium text-center pt-[12px] pb-[8px] text-lg">
                        Add more note
                    </p>
                    <p className=" px-[16px] text-center">
                        To not miss the work, please take note!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SubCover;