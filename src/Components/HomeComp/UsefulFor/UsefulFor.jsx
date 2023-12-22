import { PiStudentFill } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { FaPenNib } from "react-icons/fa";
import { PiPlusSquareLight } from "react-icons/pi";

const UsefulFor = () => {
    return (
        <div className="py-14">
            <div className="space-y-3">
                <h2 className='text-2xl md:text-3xl font-semibold leading-snug'>Who Benefits from Our App?</h2>
                <p className='text-slate-800 font-medium'>Empowering individuals and teams with streamlined productivity solutions. Explore today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-6">
                <div id="useful_box" className="transition-all p-8 rounded-lg space-y-4">
                    <PiStudentFill className="text-4xl text-indigo-600" />
                    <h3 className="font-semibold text-xl">Students</h3>
                    <p>Ace exams and manage deadlines effortlessly with our student-centric features.</p>
                </div>
                <div id="useful_box" className="transition-all p-8 rounded-lg space-y-4">
                    <MdBusinessCenter className="text-4xl text-blue-600" />
                    <h3 className="font-semibold text-xl">Businessmens</h3>
                    <p>Maximize your business potential with tools designed for the modern entrepreneur.</p>
                </div>
                <div id="useful_box" className="transition-all p-8 rounded-lg space-y-4">
                    <SiFreelancer className="text-4xl text-purple-600" />
                    <h3 className="font-semibold text-xl">Freelancers</h3>
                    <p>Efficiently manage projects and deadlines as a freelance professional.</p>
                </div>
                <div id="useful_box" className="transition-all p-8 rounded-lg space-y-4">
                    <FaBusinessTime className="text-4xl text-rose-600" />
                    <h3 className="font-semibold text-xl">corporates</h3>
                    <p>Elevate team collaboration and project management for corporate success.</p>
                </div>
                <div id="useful_box" className="transition-all p-8 rounded-lg space-y-4">
                    <FaPenNib className="text-4xl text-violet-600" />
                    <h3 className="font-semibold text-xl">Creatives</h3>
                    <p>Inspire innovation and organize creative projects with our tailored features.</p>
                </div>
                <div id="useful_box" className="transition-all p-8 rounded-lg space-y-4">
                    <PiPlusSquareLight className="text-4xl text-sky-600" />
                    <h3 className="font-semibold text-xl">And Many more</h3>
                    <p>Adaptable for various needs, our app is your all-in-one solution for success.</p>
                </div>
            </div>
        </div>
    );
};

export default UsefulFor;