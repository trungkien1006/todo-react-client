import { useState } from "react"
import SubCover from "../components/main/home/SubCover"
import RightCover from "../components/main/home/RightCover"
import LeftCover from "../components/main/home/LeftCover"
import Pages from "../components/main/home/Pages"

function Home() {
    const [isNavigate, setIsNavigate] = useState(true)
    const [fold, setFold] = useState(localStorage.getItem("bookFold") == "true" ? true : false)

    const handleFold = () => {
        localStorage.setItem("bookFold", !fold)

        setFold(!fold)
    }
    
    return (
        <div className={`w-screen h-screen flex justify-center items-center relative perspective-distant transform-3d ${isNavigate ? "animate-(--animate-appear)": ""}`}>
            <div className="w-full h-154 mx-[48px] rounded-xl flex transform-3d relative">
                <SubCover fold={fold} handleFold={handleFold} />
                
                <LeftCover fold={fold}/>
                
                <RightCover fold={fold} />
                
                <Pages fold={fold}/>
            </div>
        </div>
    )
}

export default Home