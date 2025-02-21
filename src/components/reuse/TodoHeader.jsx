import TodoHeaderTimeDiff from "./TodoHeaderTimeDiff";

function TodoHeader({ priority, dueDate }) {
    const burnHour = 12;

    const priorityColor = (value) => {
        switch (value) {
            case 1:
                return "progressing"
            case 2:
                return "completed"
            case 3:
                return "canceled"
        }
    }

    const getTimeDifference = (targetDate) => {
        const now = new Date();
        const target = new Date(targetDate);
        const diffMs = target - now;
        const subfix = diffMs > 0 ? "left" : "overdue";
        var isBurn = false;
        var type = "";
        var value = "";

        if (Math.floor(Math.abs(diffMs)) >= 24 * 60 * 60 * 1000) {
            type = "day";
            value = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60 * 24));
        }
        else if (Math.floor(Math.abs(diffMs)) >= 60 * 60 * 1000) {
            type = "hour";
            value = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60)) % 24;

            if (value <= burnHour && subfix == "left") {
                isBurn = true;
            }
        }
        else if (Math.floor(Math.abs(diffMs)) >= 60 * 1000) {
            type = "minute"
            value = Math.floor(Math.abs(diffMs) / (1000 * 60)) % 60;
            isBurn = true;
        }
        else {
            type = "second";
            value = (Math.floor(Math.abs(diffMs) / 1000) % 60)
        }

        return {
            timeDiff: `${value} ${type} ${subfix}`,
            isBurn: isBurn,
            isLate: subfix == "overdue"
        }
    };

    return (
        <div className="flex relative justify-center">
            <TodoHeaderTimeDiff data={getTimeDifference(dueDate)}/>

            <div className={`absolute right-[8px] top-[4px] text-(--status-${priorityColor(priority)}) text-center text-xl cursor-pointer`}>
                {priority > 0 && <i class="fa-solid fa-exclamation"></i>}
                {priority > 1 && <i class="fa-solid fa-exclamation"></i>}
                {priority > 2 && <i class="fa-solid fa-exclamation"></i>}
            </div>
        </div>
    )
}

export default TodoHeader;