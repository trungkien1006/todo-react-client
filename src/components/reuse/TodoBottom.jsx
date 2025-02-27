import capitalizeFirstLetter from "../../ultis/capitalizeFirstLetter"

function TodoBottom({ status }) {
    const statusParse = (value) => {
        switch (value) {
            case 0:
                return "pending"
            case 1:
                return "progressing"
            case 2:
                return "completed"
            case 3:
                return "canceled"
        }
    }

    const statusColor = (value) => {
        switch (value) {
            case 0:
                return "bg-(--status-pending)"
            case 1:
                return "bg-(--status-progressing)"
            case 2:
                return "bg-(--status-completed)"
            case 3:
                return "bg-(--status-canceled)"
        }
    }

    return (
        <div className={`relative mt-[8px] pb-[6px] justify-center cursor-pointer flex items-center ${statusColor(status)} text-white`}>
            <p className="mr-[4px]">
                {capitalizeFirstLetter(statusParse(status))}
            </p>
            { status < 2 ? <i class="fa-solid fa-pencil absolute right-[8px] fa-sm"></i> : <></> }
        </div>
    )
}

export default TodoBottom;