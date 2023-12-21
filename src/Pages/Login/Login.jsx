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
        <div className="py-10">
            <div className="relative w-2/5 mx-auto shadow-xl p-10 rounded-lg" id="authentication_container">
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