import { IoListCircle } from "react-icons/io5";
import useTaskData from "../../../Hooks/useTaskData";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoSyncCircleSharp } from "react-icons/io5";
import { MdPending } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/Provider";
import moment from "moment";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    const {data, isPending} = useTaskData()
    const pendingCount = data?.filter(item => item.status !== 'completed')
    const ongoingCount = data?.filter(item => item.status === 'ongoing')
    const completedCount = data?.filter(item => item.status === 'completed')
    const today = new Date()

    const laterTasks = data?.filter(item => moment(item?.deadline, 'ddd MMM DD').toDate() > today)
    const earlierTasks = data?.filter(item => moment(item?.deadline, 'ddd MMM DD').toDate() < today)

    return (
        <div className="bg-white rounded-lg p-5 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold"><span className="capitalize">{user?.displayName}</span>{"'"}s Statistics</h2>
            {
                isPending ? 
                <span className="loading loading-spinner loading-md"></span>
                :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                        <div className="p-5 rounded-lg bg-indigo-100">
                            <IoListCircle className="text-4xl text-indigo-600" />
                            <h2 className="mt-5 text-2xl font-semibold">{data?.length > 0 ? data?.length : 0}</h2>
                            <h3 className="mt-1 font-medium text-md">Total Tasks</h3>
                        </div>
                        <div className="p-5 rounded-lg bg-indigo-100">
                            <MdPending className="text-4xl text-indigo-600" />
                            <h2 className="mt-5 text-2xl font-semibold">{pendingCount?.length > 0 ? pendingCount?.length : 0}</h2>
                            <h3 className="mt-1 font-medium text-md">Pending Tasks</h3>
                        </div>
                        <div className="p-5 rounded-lg bg-indigo-100">
                            <IoSyncCircleSharp className="text-4xl text-indigo-600" />
                            <h2 className="mt-5 text-2xl font-semibold">{ongoingCount?.length > 0 ? ongoingCount?.length : 0}</h2>
                            <h3 className="mt-1 font-medium text-md">Ongoing Tasks</h3>
                        </div>
                        <div className="p-5 rounded-lg bg-indigo-100">
                            <IoCheckmarkDoneCircleSharp className="text-4xl text-indigo-600" />
                            <h2 className="mt-5 text-2xl font-semibold">{completedCount?.length > 0 ? completedCount?.length : 0}</h2>
                            <h3 className="mt-1 font-medium text-md">Completed Tasks</h3>
                        </div>
                    </div>
                    <hr className="my-8 h-0.5 bg-indigo-600" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-lg font-medium">Later <span className="text-base">({laterTasks?.length})</span></h3>
                            <div className="mt-4 space-y-4">
                                {
                                    laterTasks?.length > 0 ?
                                    laterTasks?.map(item => <ItemCard key={item._id} item={item}></ItemCard>).slice(0, 4)
                                    :
                                    <h6 className="font-medium text-lg">No Task Found</h6>
                                }
                                {
                                    laterTasks?.length > 4 &&     
                                    <div className="text-center">                      
                                        <Link to="/dashboard/tasks">
                                            <button className="rounded-lg py-2.5 px-5 bg-indigo-600 text-white font-medium hover:translate-x-2 transition-all mt-4">See More</button>
                                        </Link>
                                    </div>   
                                }
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Earlier <span className="text-base">({earlierTasks?.length})</span></h3>
                            <div className="mt-4 space-y-4">
                                {
                                    earlierTasks?.length > 0 ?
                                    earlierTasks?.map(item => <ItemCard key={item._id} item={item}></ItemCard>).slice(0, 4)
                                    :
                                    <h6 className="font-medium text-lg">No Task Found</h6>
                                }
                                {
                                    earlierTasks?.length > 4 &&   
                                    <div className="text-center">                      
                                        <Link to="/dashboard/tasks">
                                            <button className="rounded-lg py-2.5 px-5 bg-indigo-600 text-white font-medium hover:translate-x-2 transition-all mt-4">See More</button>
                                        </Link>
                                    </div>   
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DashboardHome;