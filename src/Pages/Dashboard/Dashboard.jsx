import { Link, NavLink, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsJournalPlus } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { LuListTodo } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSync } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import useTaskData from "../../Hooks/useTaskData";
import axios from "axios";
import Swal from "sweetalert2";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const [showChildren, setShowChildren] = useState(false)
    const [showDragBorder, setShowDragBorder] = useState(null)
    const {refetch} = useTaskData()
    const isCurrentPath = window.location.pathname === '/dashboard';
    const activeClassName = isCurrentPath ? 'active' : '';  
    
    useEffect(() => {
        setShowDragBorder(null)    
    }, [])

    const handleDraging = e => {
        e.preventDefault()
        setShowDragBorder(e.target.textContent.toLowerCase())
    }

    const handleDragLeave = e => {
        e.preventDefault()
        setShowDragBorder(null)
    }

    const handleDropped = e => {
        e.preventDefault()
        setShowDragBorder(null)
        const todoId = e.dataTransfer.getData('todoId')
        const newStatus = e.target.textContent.toLowerCase()
        axios.put(`http://localhost:5000/tasks/${todoId}`, {status: newStatus})
        .then(res => {
            if(res.data.modifiedCount > 0) {
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: `Task move to ${e.target.textContent} Successfull`,
                  showConfirmButton: false,
                  timer: 3000
               })
               refetch()
            } else {
               Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Everything is upto date',
                  showConfirmButton: false,
                  timer: 3000
               })
            }
        })
    } 

    return (
        <div className="flex flex-col sm:flex-row min-h-screen bg-slate-100 dashboard">
            <div className="sidebar">
                <div>
                    <h2 className="font-bold text-3xl">Task<span className="text-indigo-600">y</span></h2>
                    <div className="flex sm:flex-col items-center justify-center">
                        <ul className="flex sm:flex-col mt-0 sm:mt-5 lg:mt-8 space-y-0 md:space-y-5 w-full">
                            <li>
                                <Link to="/dashboard" className={`${activeClassName && 'active'} flex items-center gap-2`} exact>
                                    <RxDashboard className="mt-0 lg:mt-[2px] text-xl md:text-lg" />
                                    <span className="capitalize font-main font-medium md:text-sm lg:text-[15px] hidden sm:block">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <NavLink to="/dashboard/tasks" className={`${activeClassName && 'active'} flex items-center gap-2 justify-between`} exact onClick={() => setShowChildren(!showChildren)}>
                                    <div className="flex items-center gap-2">
                                        <BsJournalPlus className="mt-0 lg:mt-[2px] text-xl md:text-lg" />
                                        <span className="capitalize font-main font-medium md:text-sm lg:text-[15px] hidden sm:block">Tasks</span>
                                    </div>
                                    <MdKeyboardArrowDown className={`mt-0 lg:mt-[2px] text-xl md:text-lg ${showChildren ? 'rotate-180' : 'rotate-0'}`} />
                                </NavLink>
                                <ul className={`${showChildren ? 'opacity-100' : 'opacity-0'} flex sm:flex-col mt-5 space-y-0 md:space-y-3 w-full transition-all pl-5`}>
                                    <li>
                                        <div onDragLeave={handleDragLeave} onDragOver={handleDraging} onDrop={handleDropped}>
                                            <NavLink to="/dashboard/tasks/todo" className={`flex items-center gap-2 ${showDragBorder === 'to do' ? 'border border-indigo-600 border-dashed rounded-md p-2' : ''}`}>
                                                <LuListTodo className="mt-0 lg:mt-[2px] text-xl md:text-lg" />
                                                <span className="capitalize font-main font-medium md:text-sm lg:text-[15px] hidden sm:block">To Do</span>
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li>
                                        <div onDragLeave={handleDragLeave} onDragOver={handleDraging} onDrop={handleDropped}>
                                            <NavLink to="/dashboard/tasks/ongoing" className={`flex items-center gap-2 ${showDragBorder === 'ongoing' ? 'border border-indigo-600 border-dashed rounded-md p-2' : ''}`}>
                                                <IoSync className="mt-0 lg:mt-[2px] text-xl md:text-lg" />
                                                <span className="capitalize font-main font-medium md:text-sm lg:text-[15px] hidden sm:block">Ongoing</span>
                                            </NavLink>                                            
                                        </div>
                                    </li>
                                    <li>
                                        <div onDragLeave={handleDragLeave} onDragOver={handleDraging} onDrop={handleDropped}>    
                                            <NavLink to="/dashboard/tasks/completed" className={`flex items-center gap-2 ${showDragBorder === 'completed' ? 'border border-indigo-600 border-dashed rounded-md p-2' : ''}`}>
                                                <FaRegCircleCheck className="mt-0 lg:mt-[2px] text-xl md:text-lg" />
                                                <span className="capitalize font-main font-medium md:text-sm lg:text-[15px] hidden sm:block">Completed</span>
                                            </NavLink>                                        
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex gap-8 items-center">
                        <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="" />
                        <Link to="/">
                            <ImExit className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full sm:ml-[32%] sm:top-0 sm:right-0 lg:ml-[22%] p-3 md:p-5 lg:p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;