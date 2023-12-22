import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { BiSolidDashboard } from "react-icons/bi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Header = () => {
    const {user, LogOutUser} = useContext(AuthContext)

    const handleLogOutUser = () => {
        LogOutUser()
    }

    return (
        <div className="flex justify-between items-center py-5 px-8 max-w-[1200px] mx-auto rounded-full" id="header">
            <h2 className="font-bold text-2xl">Task<span className="text-indigo-600">y</span></h2>
            <ul className="flex items-center gap-5">
                <li>
                    <NavLink to="/">
                        <HiHome /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">
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
    );
};

export default Header;