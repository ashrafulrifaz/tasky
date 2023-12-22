import axios from "axios";
import { FiTrash } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import Swal from "sweetalert2";

const TaskCard = ({task}) => {
    const {_id, priority, deadline, title} = task || {}
    console.log(_id);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/tasks/${_id}`)
                    .then(res => {
                        if(res.deletedCount){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Tasks Deleted Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-4 rounded-lg border border-slate-200 relative hover:border-red-600 transition-all" id="task_card">
            <div className="flex justify-between items-center">
                <span className={`capitalize font-medium py-1 px-3 rounded-lg text-sm ${
                    priority === 'high' ? 'text-red-500 bg-red-100' 
                    : priority === 'moderate' ? 'text-orange-500 bg-orange-100' : 'text-indigo-500 bg-indigo-100'
                }`}>{priority}</span>
                <div className="flex gap-1.5 items-center">
                    <FiClock />
                    <span className="font-medium text-[15px]">{deadline.slice(4, 10)}</span>
                </div>
            </div>
            <h3 className="mt-4 text-xl font-medium">{title}</h3>
            <div onClick={handleDelete} id="delete_btn" className="absolute bottom-0 right-0 opacity-0 transition-all duration-700 p-1.5 bg-red-600 rounded-tl-lg rounded-br-lg cursor-pointer">
                <FiTrash className="text-xl text-white" />
            </div>
        </div>
    );
};

export default TaskCard;