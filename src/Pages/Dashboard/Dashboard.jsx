import { Link, NavLink, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsJournalPlus } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const isCurrentPath = window.location.pathname === '/dashboard';
    const activeClassName = isCurrentPath ? 'active' : '';   

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
                                <NavLink to="/dashboard/tasks" className={`${activeClassName && 'active'} flex items-center gap-2`} exact>
                                    <BsJournalPlus className="mt-0 lg:mt-[2px] text-xl md:text-lg" />
                                    <span className="capitalize font-main font-medium md:text-sm lg:text-[15px] hidden sm:block">Tasks</span>
                                </NavLink>
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