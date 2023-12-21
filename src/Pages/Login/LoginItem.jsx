import { useState } from "react";

const LoginItem = ({setShowReg}) => {
    const [showPass, setShowPass] = useState(false)

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Login to Your Account</h2>
            <form className="mt-10 space-y-4">
                <div>
                    <label className="font-medium" htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                </div>
                <div className='relative'>
                    <label className="font-medium" htmlFor="password">Password</label>
                    <input id="password" type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">
                        {
                        showPass ? 
                        ''
                        :
                        ''
                        }
                    </span>
                </div>
                <button className='capitalize font-medium bg-indigo-700 text-white text-[15px] py-2 rounded-lg w-full hover:translate-x-2 transition-all'>Login</button>
                <p className='text-center font-medium'>Don{"'"}t Have An Account <span onClick={() => setShowReg(true)} className="underline text-indigo-600 cursor-pointer">Register</span></p>
            </form>
        </div>
    );
};

export default LoginItem;