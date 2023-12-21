import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegisterItem = ({setShowReg}) => {
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm()
    const {createNewUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const handlePage = () => {
        setShowReg(false)
        localStorage.setItem("showReg", false)
    }

    const onSubmit = async(data) => {
        setLoading(true)
        const imageFile = {image: data.image[0]}
        try {
            const res = await axios.post(image_hosting_url, imageFile, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
      
            if (res?.data?.success) {
              createNewUser(data.email, data.password)
                .then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setLoading(false)
                    navigate('/')
                })
                .catch((err) => {
                  console.log(err.message);
                  setLoading(false)
                });
            } else {
              console.log('Image upload failed');
              setLoading(false)
            }
        } catch (error) {
            console.log(error.message);
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Create an Account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
                <div>
                    <label className="font-medium" htmlFor="name">Name</label>
                    <input {...register("name", { required: true })} id="name" type="text"  placeholder="Enter your name" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    {errors.name && <span className="text-red-600 font-medium">Name is required</span>}
                </div>
                <div>
                    <label className="font-medium" htmlFor="image">Image</label>
                    <input {...register("image", { required: true })} id="image" type="file"  className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    {errors.image && <span className="text-red-600 font-medium">Image is required</span>}
                </div>
                <div>
                    <label className="font-medium" htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} id="email" type="email"  placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    {errors.name && <span className="text-red-600 font-medium">Email is required</span>}
                </div>
                <div className='relative'>
                    <label className="font-medium" htmlFor="password">Password</label>
                    <input {...register("password", { required: true })} id="password" type={showPass ? 'text' : 'password'}  placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-indigo-600 focus:outline-none" />
                    <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">
                        {
                        showPass ? 
                        <IoEyeOffOutline className="text-lg" />
                        :
                        <IoEyeOutline className="text-lg" />
                        }
                    </span>
                </div>
                {errors.name && <span className="text-red-600 font-medium">Password is required</span>}
                <button className='capitalize font-medium bg-indigo-700 text-white text-[15px] py-2.5 rounded-lg w-full hover:translate-x-2 transition-all'>Register</button>
                <p className='text-center font-medium'>Don{"'"}t Have An Account <span onClick={handlePage} className="underline text-indigo-600 cursor-pointer">Login</span></p>
            </form>
        </div>
    );
};

export default RegisterItem;