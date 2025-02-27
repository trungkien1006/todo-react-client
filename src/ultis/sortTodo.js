import timeDiff from "./timeDiff";

const sortTodo = (todos, type) => {
    var sortedTodo;
    
    switch (type) {
        case "priority-i": {
            sortedTodo = [...todos].sort((a, b) => a.priority - b.priority);
            break;
        }
        case "priority-r": {
            sortedTodo = [...todos].sort((a, b) => b.priority - a.priority);
            break;
        }
        case "status-i": {
            sortedTodo = [...todos].sort((a, b) => a.status - b.status);
            break;
        }
        case "status-r": {
            sortedTodo = [...todos].sort((a, b) => b.status - a.status);
            break;
        }
        default: {
            sortedTodo = [...todos].sort((a, b) => timeDiff(a.due_date, b.due_date));
        }
    }
   

    return sortedTodo;
}

export default sortTodo;