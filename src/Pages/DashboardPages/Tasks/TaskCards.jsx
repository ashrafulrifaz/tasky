import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/Provider";
import TaskCard from "./TaskCard";

const TaskCards = () => {
    const [tasksData, setTasksData] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/tasks?email=${user?.email}`,{withCredentials: true})
           .then(res => setTasksData(res.data))
     }, [user])

    return (
        <div className="grid grid-cols-3 gap-8 mt-10">
            {
                tasksData?.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
            }
        </div>
    );
};

export default TaskCards;