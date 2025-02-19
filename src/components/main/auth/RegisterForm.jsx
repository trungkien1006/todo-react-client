import { useState } from "react"
import useDebounce from "../../../hooks/useDebounce"
import authAPI from "../../../apis/modules/auth.api"

function RegisterForm({ handleSetFlip }) {
    const [input, setInput] = useState({ username: "", password: "", rePassword: "" })
     const [inputError, setInputError] = useState("")
    
    const onChangeUsername = useDebounce(value => {
        setInput({ ...input, username: value })
    }, 100)

    const onChangePassword = useDebounce(value => {
        setInput({...input, password: value})
    }, 100)
    
    const onChangeConfirmPassword = useDebounce(value => {
        setInput({...input, rePassword: value})
    }, 100)

    const onSubmitForm1 = useDebounce(async (input) => {
        await authAPI.register(input.username, input.password, input.rePassword).then(response => {
            localStorage.setItem("authToken", response.data.data.token)

            window.location.href = "/home"
        })
        .catch(error => {
            if (error.response) {
               setInputError(error.response.data.errors)
            } 
        });
    }, 500)

    return (
        <div className="w-1/2 h-full rounded-r-lg py-[24px] px-[36px]">
            <p className="font-bold mb-[4px]">
                <span className="text-2xl">Welcome,</span>
                <br/>
                <span className="text-3xl">Register Now!</span>
            </p>

            <p className="mb-[12px]">
                <span className="text-(--grey-sub-content)">I Am An Old User</span> / <span className="font-medium cursor-pointer" onClick={handleSetFlip}>Login</span>
            </p>

            <div className="">
                <form action="#" onSubmit={e => { e.preventDefault();  onSubmitForm1(input)}}>
                    <input type="text" required className="w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[14px]" placeholder="Username" onChange={e => onChangeUsername(e.target.value)}/>
                    <input type="password" required className="w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[14px]" placeholder="Password" onChange={e => onChangePassword(e.target.value)}/>
                    <input type="password" required className="w-full bg-(--grey-input) py-[8px] px-[12px] focus:outline-none rounded-md mb-[2px]" placeholder="Confirm Password" onChange={e => onChangeConfirmPassword(e.target.value)}/>

                    <p className="text-red-500 mb-[16px]">
                        {inputError}
                    </p>

                    <button className="font-medium bg-(--blue-btn) rounded-md w-full py-[8px] cursor-pointer hover:shadow-lg duration-300" type="submit">Register Now</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm