import { useState } from "react"

function FlipCard({flip, handleSetFlip}) {
    return (
        <div className={"absolute w-1/2 h-full duration-1000 origin-left right-0 transform-3d " + (flip ? "transform-(--rotateY-back-)": "")}>
            <div className={"w-full h-full py-[24px] px-[36px] bg-(--blue-btn) rounded-l-lg absolute top-0 left-0 transform-(--rotateY-back) backface-hidden"}>
                <p className="font-bold mb-[8px]">
                    <span className="text-2xl">My friend!</span>
                    <br/>
                    <span className="text-2xl">Login to your motivation!</span>
                </p>
                <div className="rounded-lg px-[50px] mb-[12px]">
                    <img src="/images/empty.jpg" alt="" className="rounded-lg"/>
                </div>
                <div className="w-full flex cursor-pointer relative group" onClick={handleSetFlip}>
                    <div className="flex">
                        <div className="bg-(--yellow-btn) h-full w-[40px] rounded-full text-lg absolute z-1 duration-500 group-hover:w-full group-hover:duration-500">

                        </div>
                        <div className="py-[8px] w-[40px] absolute z-2 text-center">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="py-[6px] w-full text-center text-lg font-medium z-2">
                        Flip It!
                    </div>
                </div>
            </div>
            <div className={"w-full h-full py-[24px] px-[36px] bg-(--yellow-btn) rounded-r-lg absolute top-0 left-0 backface-hidden " + (flip ? "pointer-events-none" : "")}>
                    <p className="font-bold mb-[8px]">
                    <span className="text-2xl">New one?</span>
                    <br/>
                    <span className="text-2xl">Let's discover!</span>
                </p>
                <div className="rounded-lg px-[50px] mb-[12px]">
                    <img src="/images/empty.jpg" alt="" className="rounded-lg"/>
                </div>
                <div className="w-full flex cursor-pointer relative group" onClick={handleSetFlip}>
                    <div className="flex">
                        <div className="bg-(--blue-btn) h-full w-[40px] rounded-full text-lg absolute z-1 duration-500 group-hover:w-full group-hover:duration-500">

                        </div>
                        <div className="py-[8px] w-[40px] absolute z-2 text-center">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="py-[6px] w-full text-center text-lg font-medium z-2">
                        Flip It!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard