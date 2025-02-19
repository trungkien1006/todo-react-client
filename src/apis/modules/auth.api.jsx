import axiosPublic from "../clients/public.client";
import axiosPrivate from "../clients/private.client";

const authAPI = {
    login: async (username, password) => {
        return await axiosPublic.post("/login", { name: username, password: password })
    },
    register: async (username, password, rePassword) => {
        return await axiosPublic.post("/register", { name: username, password: password, rePassword: rePassword })
    },
    checkValidToken: async () => {
        return await axiosPrivate.get("/auth/checkToken")
    }
}

export default authAPI;