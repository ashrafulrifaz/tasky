import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { BiSolidDashboard } from "react-icons/bi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Header = () => {
    const {user, LogOutUser} = useContext(AuthContext)

    const handleLogOutUser = () => {
        LogOutUser()
    }

    return (
        <div className="flex justify-between items-center py-2.5 md:py-5 px-4 md:px-8 max-w-[95%] xl:max-w-[1200px] mx-auto rounded-full" id="header">
            <h2 className="font-bold text-2xl">Task<span className="text-indigo-600">y</span></h2>
            <ul className="items-center gap-5 hidden lg:flex">
                <li>
                    <NavLink to="/">
                        <HiHome /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/home">
                        <BiSolidDashboard /> Dashboard
                    </NavLink>
                </li>
                {
                    !user &&  
                    <li>
                        <NavLink to="/login">
                            <LuLogIn /> Login
                        </NavLink>   
                    </li>
                }
                {
                    user && 
                    <li>
                        <a className="cursor-pointer" onClick={handleLogOutUser}><LuLogOut /> Log Out</a>    
                    </li>
                }
            </ul>
            <div className="drawer drawer-end lg:hidden z-10">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button mt-0 flex justify-end">
                    <FaBarsStaggered className="text-xl" />
                    </label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay mt-0">
                    </label>
                    <ul className="flex flex-col menu w-60 md:w-72 px-8 min-h-full bg-white text-base-content" id="nav_item">
                        <li>
                            <NavLink to="/">
                                <HiHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/home">
                                <BiSolidDashboard /> Dashboard
                            </NavLink>
                        </li>
                        {
                            !user &&  
                            <li>
                                <NavLink to="/login">
                                    <LuLogIn /> Login
                                </NavLink>   
                            </li>
                        }
                        {
                            user && 
                            <li>
                                <a className="cursor-pointer" onClick={handleLogOutUser}><LuLogOut /> Log Out</a>    
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;