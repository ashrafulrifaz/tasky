import { useEffect, useState } from "react";
import LoginItem from "./LoginItem";
import RegisterItem from "./RegisterItem";

const Login = () => {
    const isShwoReg = localStorage.getItem("showReg")
    const [showReg, setShowReg] = useState(isShwoReg || false)

    useEffect(() => {
        if(isShwoReg === true || isShwoReg === false){
            setShowReg(isShwoReg)
        }
    }, [isShwoReg])

    return (
        <div className="py-10 max-w-[90%] mx-auto xl:max-w-[1100px]">
            <div className="relative w-full md:w-3/5 lg:w-2/5 mx-auto shadow-xl p-6 md:p-10 rounded-lg" id="authentication_container">
                <div className={`${!showReg ? 'block' : 'hidden'}`}>
                    <LoginItem setShowReg={setShowReg}></LoginItem>
                </div>
                <div className={`${showReg ? 'block' : 'hidden'}`}>
                    <RegisterItem setShowReg={setShowReg}></RegisterItem>
                </div>
            </div>
        </div>
    );
};

export default Login;