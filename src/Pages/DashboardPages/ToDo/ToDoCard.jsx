import axios from "axios";
import { FiTrash } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import Swal from "sweetalert2";

const ToDoCard = ({task}) => {
    const {_id,  priority, deadline, title, description, status} = task || {}
    
    const handleDragItem = (e) => {
        e.dataTransfer.setData('todoId', _id)
    }

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
                axios.delete(`https://task-management-server-indol.vercel.app/tasks/${_id}`)
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
        <div draggable onDragStart={handleDragItem} className={`p-4 rounded-lg border border-slate-200 relative hover:border-red-600 transition-all`} id="task_card">
            <div className="flex justify-between items-center">
                <span className={`capitalize font-medium py-1 px-3 rounded-lg text-sm ${
                    priority === 'high' ? 'text-red-500 bg-red-100' 
                    : priority === 'moderate' ? 'text-orange-500 bg-orange-100' : 'text-indigo-500 bg-indigo-100'
                }`}>{priority}</span>
                {
                    status === 'completed' ? 
                    <FaCircleCheck className="text-lg text-green-500" />
                    :
                    <div className="flex gap-1.5 items-center">
                        <FiClock />
                        <span className="font-medium text-[15px]">{deadline.slice(4, 10)}</span>
                    </div>
                }
            </div>
            <h3 className="mt-4 text-xl font-medium">{title}</h3>
            <hr className="my-2" />
            <p className="text-slate-800 font-medium">{description}</p>
            <div onClick={handleDelete} id="delete_btn" className="absolute bottom-0 right-0 opacity-0 transition-all duration-700 p-1.5 bg-red-600 rounded-tl-lg rounded-br-lg cursor-pointer">
                <FiTrash className="text-xl text-white" />
            </div>
        </div>
    );
};

export default ToDoCard;