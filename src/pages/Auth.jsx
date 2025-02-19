import { useState } from "react";
import FlipCard from "../components/main/auth/FlipCard";
import LoginForm from "../components/main/auth/LoginForm";
import RegisterForm from "../components/main/auth/RegisterForm";

function Auth() {
     const [flip, setFlip] = useState(false)

    const handleSetFlip = () => {
        setFlip(!flip)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-3xl h-96 shadow-(--shadow-auth) rounded-xl flex relative perspective-distant">
                <LoginForm handleSetFlip={handleSetFlip}/>

                <hr className="border-1 border-dashed border-(--grey-sub-content) h-full"/>

                <RegisterForm handleSetFlip={handleSetFlip}/>

                <FlipCard flip={flip} handleSetFlip={handleSetFlip} />
            </div>
        </div>
    )
}

export default Auth