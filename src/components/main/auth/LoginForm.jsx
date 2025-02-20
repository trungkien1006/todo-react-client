import { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import authAPI from "../../../apis/modules/auth.api";

function LoginForm({handleSetFlip, handleNavigate}) {
    const [input, setInput] = useState({ username: "", password: "" })
    const [inputError, setInputError] = useState("")
    
    const onChangeUsername = useDebounce(value => {
        setInput({ ...input, username: value })
    }, 100)

     const onChangePassword = useDebounce(value => {
        setInput({...input, password: value})
    }, 100)

    const onSubmitForm = useDebounce(async (input) => {
        await authAPI.login(input.username, input.password).then(response => {
            handleNavigate(response.data.data.token)
        })
        .catch(error => {
            if (error.response) {
               setInputError(error.response.data.errors)
            } 
        });
    }, 500)

    return (
        <div className="w-1/2 h-full rounded-l-lg py-[24px] px-[36px]">
            <p className="font-bold mb-[8px]">
                <span className="text-2xl">Hey,</span>
                <br/>
                <span className="text-3xl">Login Now!</span>
            </p>

            <p className="mb-[24px]">
                <span className="text-(--grey-sub-content)">I Am A New User</span> / <span className="font-medium cursor-pointer" onClick={handleSetFlip}>Create New</span>
            </p>

            <div className="">
                <form action="#" onSubmit={e => { e.preventDefault(); onSubmitForm(input) }}>
                    <input
                        type="text"
                        className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[16px]`}
                        placeholder="Username"
                        onChange={e => onChangeUsername(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className={`w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[2px]`}
                        placeholder="Password"
                        onChange={e => onChangePassword(e.target.value)}
                        required
                    />

                    <p className="text-red-500 mb-[6px]">
                        {inputError}
                    </p>

                    <p className="mb-[20px]">
                        <span className="text-(--grey-sub-content)">Forget password?</span> / <span className="font-medium cursor-pointer">Reset</span>
                    </p>

                    <button className="font-medium bg-(--yellow-btn) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">Login Now</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm