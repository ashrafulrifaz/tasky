import useTaskData from "../../../Hooks/useTaskData";
import TaskCard from "./TaskCard";

const TaskCards = () => {
    const {data} = useTaskData()

    return (
        <div className="grid grid-cols-3 gap-8 mt-10">
            {
                data?.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
            }
        </div>
    );
};

export default TaskCards;