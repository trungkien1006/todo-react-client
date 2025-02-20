import { useEffect, useState } from "react";

function Page({ fold, side}) {
    const [flip, setFlip] = useState(false)

    useEffect(() => {
        if (side == "left") {
            setFlip(!flip)
        }
    }, [fold])

    return (
        <div className={`duration-1000 transform-3d ${flip ? `transform-(--rotateY-back)` : ``} w-(--book-content-width) h-(--book-content-height) absolute origin-right shadow-(--shadow-book)`}>
            <div className={`absolute w-full h-full flex justify-end rounded-r-lg bg-(--old-paper-color) top-0 left-0 transform-(--rotateY-back) backface-hidden`}>
                {side}
            </div>
            <div className={`w-full h-full flex bg-(--old-paper-color) rounded-l-lg absolute top-0 left-0 backface-hidden`}>
                {side}
            </div>
        </div>
    )
}

export default Page;