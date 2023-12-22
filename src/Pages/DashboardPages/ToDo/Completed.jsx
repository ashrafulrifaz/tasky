import useTaskData from "../../../Hooks/useTaskData";
import ToDoCard from "./ToDoCard";
import { IoNavigateCircleOutline } from "react-icons/io5";

const Completed = () => {
    const {data} = useTaskData()
    const completedData = data?.filter(item => item.status === 'completed') || []

    return (
        <div className="bg-white p-4 md:p-10 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="font-semibold text-2xl">Completed Tasks</h2>
                <button className="flex gap-2 items-center rounded-lg py-2.5 px-4 bg-indigo-600 text-white font-medium hover:translate-x-2 transition-all mt-4 text-sm">Add New <IoNavigateCircleOutline className="text-lg" /></button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {
                    completedData?.map(task => <ToDoCard key={task._id} task={task}></ToDoCard>)
                }
            </div>
        </div>
    );
};

export default Completed;