import TodoBottom from "./TodoBottom";
import TodoHeader from "./TodoHeader";

function TodoNote({ todo }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        return new Intl.DateTimeFormat("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);
    };
    
    return (
        <div className={`w-[180px] mb-[4px] shadow-(--shadow-auth) duration-1000`} style={{borderTopLeftRadius: "250px 15px", borderBottomLeftRadius: "20px 115px", borderBottomRightRadius: "105px 15px"}}>
                <div className="bg-white relative" style={{ borderTopLeftRadius: "250px 15px" }}>
                
                <TodoHeader priority={todo.priority} dueDate={todo.due_date} />
                
                </div>
                <div className="overflow-hidden bg-white relative" style={{borderBottomLeftRadius: "14px 90px", borderBottomRightRadius: "80px 10px"}}>
                <hr className="border-1 border-dashed border-(--old-book-color) my-[4px] w-full z-10"/>
            
                <div className="px-[12px]">
                    <p className="text-lg font-medium">
                        {todo.title}
                    </p>
                    <p className="text-xs text-(--grey-sub-content) text-right mt-[-4px]">
                        {formatDate(todo.due_date)}
                    </p>
                    <p className="text-xs overflow-hidden h-[48px] line-clamp-3 mt-[4px]">
                        {todo.description}
                    </p>
                </div>
                
                <TodoBottom status={todo.status}/>
            </div>
        </div>
    )
}

export default TodoNote;