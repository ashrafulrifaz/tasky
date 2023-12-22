import useTaskData from "../../../Hooks/useTaskData";
import TaskCard from "./TaskCard";

const TaskCards = () => {
    const {data, isPending} = useTaskData()

    return (
        <div>
            {
                isPending ? 
                <span className="loading loading-spinner loading-md"></span>
                :                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    {
                        data?.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                    }
                </div>
            }
        </div>
    );
};

export default TaskCards;