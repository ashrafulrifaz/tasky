import { Link, NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-8 border-t border-slate-400" id="footer">
            <div className="max-w-[90%] xl:max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                <div>
                    <h2 className="font-bold text-3xl">Task<span className="text-indigo-600">y</span></h2>
                    <p className="font-medium text-slate-600 mt-4 mr-10">Elevate tasks effortlessly. Tailored for students, businessmen, and more. Sign up for seamless productivity now!</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">Important Links</h3>
                    <ul className="grid gap-1.5 mt-2">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">Social Links</h3>
                    <ul className="flex gap-3 md:gap-5 mt-2 overflow-hidden flex-wrap" id="socials">
                        <li>
                            <Link id="facebook">
                                <FaFacebookF />
                                <span>Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link id="twitter">
                                <FaXTwitter />
                                <span>Twitter</span>
                            </Link>
                        </li>
                        <li>
                            <Link id="instagram">
                                <FaInstagram />
                                <span>Instagram</span>
                            </Link>
                        </li>
                        <li>
                            <Link id="linkedin">
                                <FaLinkedin />
                                <span>Linkedin</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;