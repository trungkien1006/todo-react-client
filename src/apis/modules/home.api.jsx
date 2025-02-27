import axiosPublic from "../clients/public.client";
import axiosPrivate from "../clients/private.client";

const homeAPI = {
    getFilterTodo: async ({...rest}) => {
        return await axiosPrivate.post("/", { ...rest })
    },
    createTodo: async ({ ...rest }) => {
        return await axiosPrivate.post("/create", { ...rest })
    },
    updateTodo: async ({ ...rest }) => {
        return await axiosPrivate.put("/update", { ...rest })
    },
    deleteTodo: async (id) => {
        console.log(id);
        
        return await axiosPrivate.delete("/delete", {data: { id: id }})
    }
}

export default homeAPI;