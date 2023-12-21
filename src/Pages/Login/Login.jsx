import { useState } from "react";
import LoginItem from "./LoginItem";
import RegisterItem from "./RegisterItem";

const Login = () => {
    const [showReg, setShowReg] = useState(false)
    console.log(showReg);

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