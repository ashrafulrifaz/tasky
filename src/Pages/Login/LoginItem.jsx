import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const LoginItem = ({setShowReg}) => {
    const [showPass, setShowPass] = useState(false)
    const [errorMessage, setErroMessage] = useState(null)
    const { register, handleSubmit, formState: { errors }} = useForm()
    const {LoginUser, googleLogin} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handlePage = () => {
        setShowReg(true)
        localStorage.setItem("showReg", true)
    }

    const onSubmit = (data) => {
        setLoading(true)
        LoginUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                setLoading(false)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false)
            })
        setLoading(false)
    } 

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider()
        googleLogin(provider)
         .then(() => {
            Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Login Successful',
               showConfirmButton: false,
               timer: 3000
            })
            navigate('/')
        })
        .then(error => setErroMessage(error.message))
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Login to Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
                <div>
                    <label className="font-medium" htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} id="email" type="email" name="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    {errors.email && <span className="text-red-600 font-medium">Email is required</span>}
                </div>
                <div className='relative'>
                    <label className="font-medium" htmlFor="password">Password</label>
                    <input {...register("password", { required: true })} id="password" type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">
                        {
                        showPass ? 
                        <IoEyeOffOutline className="text-lg" />
                        :
                        <IoEyeOutline className="text-lg" />
                        }
                    </span>
                </div>
                {errors.password && <span className="text-red-600 font-medium">Password is required</span>}
                <button className='capitalize font-medium bg-indigo-700 text-white text-[15px] py-2.5 rounded-lg w-full hover:translate-x-2 transition-all'>Login</button>
                <p className='text-center font-medium'>Don{"'"}t Have An Account <span onClick={handlePage} className="underline text-indigo-600 cursor-pointer">Register</span></p>
            </form>
            <button onClick={handleGoogleLogin} className="capitalize font-medium text-indigo-700 text-[15px] py-2.5 px-4 rounded-lg  hover:translate-x-2 transition-all flex gap-2 items-center border border-indigo-600 mx-auto mt-3">Continue With Google <FcGoogle className="text-lg" /></button>
        </div>
    );
};

export default LoginItem;