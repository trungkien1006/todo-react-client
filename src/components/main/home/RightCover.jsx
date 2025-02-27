function RightCover({ fold, setIsNavigate }) {

    const handleNavigate = () => {
    setTimeout(() => {
        localStorage.setItem("authToken", null)

        window.location.href = "/"
    }, 1500)

    setIsNavigate(false)
    }

    return (
        <div className={`w-2/5 h-full shadow-(--shadow-book) inset-shadow-sm origin-left relative duration-2000 transform-3d ${fold ? "animate-(--animate-close-cover)": "animate-(--animate-open-cover)"} z-3`}>
            <div className={`w-full h-full flex justify-end bg-(--old-book-color) rounded-l-lg absolute top-0 left-0 transform-(--rotateY-back) backface-hidden`}>
                <div className="w-1/2 h-full py-[32px] px-[32px] flex flex-col justify-between items-end">
                    <p className="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eligendi aspernatur accusantium a dolores numquam harum sunt! Voluptatibus itaque numquam aspernatur repellat, possimus quibusdam, similique, vel fugiat praesentium quis maiores?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eligendi aspernatur accusantium a dolores numquam harum sunt! Voluptatibus itaque numquam aspernatur repellat, possimus quibusdam, similique, vel fugiat praesentium quis maiores?
                    </p>
                    <button onClick={handleNavigate} className="cursor-pointer font-medium text-lg duration-300 hover:duration-300 hover:opacity-[.5]">
                        Exit!
                    </button>
                </div>
            </div>
            <div className={`w-full h-full bg-(--old-book-color) rounded-r-lg absolute top-0 left-0 backface-hidden `}>
                
            </div>
        </div>
    )
}

export default RightCover;