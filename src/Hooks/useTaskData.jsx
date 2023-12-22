import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useTaskData = () => {
    const {user} = useContext(AuthContext)
    const { data, isPending, refetch } = useQuery({
        queryKey: ['all_blogs'],
        queryFn: async () => {
            const res = await axios.get(`https://task-management-server-indol.vercel.app/tasks?email=${user?.email}`, {withCredentials:true})
            return res.data
        }
    })
    return {data, isPending, refetch}
};

export default useTaskData;