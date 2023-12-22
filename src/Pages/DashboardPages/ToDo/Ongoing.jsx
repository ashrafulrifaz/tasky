import useTaskData from "../../../Hooks/useTaskData";
import ToDoCard from "./ToDoCard";
import { IoNavigateCircleOutline } from "react-icons/io5";

const Ongoing = () => {
    const {data} = useTaskData()
    const ongoingData = data?.filter(item => item.status === 'ongoing') || []

    return (
        <div className="bg-white p-10 rounded-lg">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl">Ongoing Tasks</h2>
                <button className="flex gap-2 items-center rounded-lg py-2.5 px-4 bg-indigo-600 text-white font-medium hover:translate-x-2 transition-all mt-4 text-sm">Add New <IoNavigateCircleOutline className="text-lg" /></button>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
                {
                    ongoingData?.map(task => <ToDoCard key={task._id} task={task}></ToDoCard>)
                }
            </div>
        </div>
    );
};

export default Ongoing;