import { useState } from "react";
import FlipCard from "../components/main/auth/FlipCard";
import LoginForm from "../components/main/auth/LoginForm";
import RegisterForm from "../components/main/auth/RegisterForm";

function Auth() {
    const [flip, setFlip] = useState(false)
    const [isNavigate, setIsNavigate] = useState(false)

    const handleSetFlip = () => {
        setFlip(!flip)
    }

    const handleNavigate = (token) => {
        setTimeout(() => {
            localStorage.setItem("authToken", token)

            window.location.href = "/home"
        }, 1500)

        setIsNavigate(true)
    }

    return (
        <div className={`w-screen h-screen flex justify-center items-center origin-center ${isNavigate ? "animate-(--animate-disappear)": ""}`}>
            <div className="w-3xl h-96 shadow-(--shadow-auth) rounded-xl flex relative perspective-distant">
                <LoginForm handleSetFlip={handleSetFlip} handleNavigate={handleNavigate} />

                <hr className="border-1 border-dashed border-(--grey-sub-content) h-full"/>

                <RegisterForm handleSetFlip={handleSetFlip} handleNavigate={handleNavigate}/>

                <FlipCard flip={flip} handleSetFlip={handleSetFlip} />
            </div>
        </div>
    )
}

export default Auth