import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import TaskCards from "./TaskCards";
import { AuthContext } from "../../../Provider/Provider";


const Tasks = () => {
    const [showForm, setShowForm] = useState(false)
    const { register, handleSubmit, reset} = useForm()
    const [startDate, setStartDate] = useState(null);
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const onSubmit = (data) => {
        setLoading(true)
        if(startDate === null) {
            setLoading(false)
            return
        }
        console.log(startDate);
        
        const newTask = {
            title: data.title,
            description: data.description,
            deadline: startDate,
            priority: data.priority,
            email: user?.email,
            status: 'to-do'
        }

        axios.post('http://localhost:5000/tasks', newTask)  
            .then(res => {
                if(res.data.insertedId){ 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tasks Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setLoading(false)
                    setShowForm(false)
                    reset()
                    setStartDate(null)
                }
            })
        setLoading(false)
    }

    return (
        <div className="bg-white rounded-lg p-5 md:p-10">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl">Tasks</h2>
                <button onClick={() => setShowForm(true)} className="flex gap-2 items-center rounded-lg py-2.5 px-4 bg-indigo-600 text-white font-medium hover:translate-x-2 transition-all mt-4 text-sm">Add New <FiPlus /></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`${showForm ? 'block' : 'hidden'} border border-slate-300 mt-10 rounded-lg p-4 md:p-8 space-y-4`}>
                <div>
                    <input {...register("title", { required: true })} type="text" placeholder="Type your title....." className="w-full mt-2 bg-gray-100 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                </div>
                <div>
                    <input {...register("description", { required: true })} type="text" placeholder="Type your description....." className="w-full mt-2 bg-gray-100 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div>
                        <DatePicker 
                            placeholderText="Click to select a date" 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}  
                            className="focus:outline-none w-full mt-2 bg-gray-100 p-3 rounded-lg" 
                        />
                    </div>
                    <div className="bg-gray-100 py-2.5 mt-2 px-3 rounded-lg">
                        <select {...register("priority", { required: true })} className="bg-gray-100 focus:outline-none">
                            <option value='' selected disabled>Priority</option>                                
                            <option value="low">Low</option>                                
                            <option value="moderate">Moderate</option>                                
                            <option value="high">High</option>                          
                        </select>
                    </div>
                    <button className='capitalize font-medium bg-indigo-700 text-white text-[15px] py-2.5 px-10 rounded-lg hover:translate-x-2 transition-all mt-2'>
                        {
                            loading ? 
                            <span className="loader"></span>
                            :
                            <span>Add</span>
                        }
                    </button>
                </div>
            </form>
            <TaskCards></TaskCards>
        </div>
    );
};

export default Tasks;