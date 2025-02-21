function TodoBottom({ status }) {
    const statusColor = (value) => {
        switch (value) {
            case "Pending":
                return "bg-(--status-pending)"
            case "Propressing":
                return "bg-(--status-propressing)"
            case "Completed":
                return "bg-(--status-completed)"
            case "Canceled":
                return "bg-(--status-canceled)"
        }
    }

    return (
        <div className={`relative duration-300 hover:duration-300 hover:opacity-[0.6] mt-[8px] pb-[6px] justify-center cursor-pointer flex items-center ${statusColor(status)} text-white`}>
            <p className="mr-[4px]">
                {status}
            </p>
            <i class="fa-solid fa-ellipsis absolute right-[8px]"></i>
        </div>
    )
}

export default TodoBottom;