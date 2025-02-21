import axiosPublic from "../clients/public.client";
import axiosPrivate from "../clients/private.client";

const homeAPI = {
    getFilterTodo: async ({...rest}) => {
        return await axiosPrivate.post("/", { ...rest })
    }
}

export default homeAPI;