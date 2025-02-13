import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import logo1 from "../assets/icons8-rating-100.png"

const Navbar = () => {
    const navigate = useNavigate();
    const { logOutUser, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser(auth)
            .then(result => {
                navigate("/")
                toast.success("Logout successfull")
            })
            .catch(error => {
                // console.log(error);
            })
    }
    return (
        <div className="navbar fixed z-10 bg-gradient-to-b from-[#00032e] to-[#070b32]">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/"><li><a>Home</a></li></NavLink>
                        <NavLink to="/services"><li><a>Services</a></li></NavLink>
                        {
                            user && <div>
                                <NavLink to="/services"><li><a> Add Service</a></li></NavLink>
                                <NavLink to="/myreviews"><li><a> My Reviews</a></li></NavLink>
                                <NavLink to="/myservices"><li><a> My Services</a></li></NavLink>
                            </div>
                        }
                    </ul>
                </div>
                <button className="h-16 w-16 flex justify-center md:mx-8">
                    <NavLink to="/">
                        <img src={logo1} alt="" />
                    </NavLink>
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex items-center gap-4 px-1 text-gray-300">
                    <NavLink to="/"><li className=" hover:text-white"><a>Home</a></li></NavLink>
                    <NavLink to="/services"><li className="hover:text-white"><a>Services</a></li></NavLink>
                    {
                        user &&
                        <div className="flex items-center gap-4 text-gray-300">
                            <NavLink to="/addservice"><li className="hover:text-white"><a> Add Service</a></li></NavLink>
                            <NavLink to="/myreviews"><li className="hover:text-white"><a> My Reviews</a></li></NavLink>
                            <NavLink to="/myservices"><li className="hover:text-white"><a> My Services</a></li></NavLink>
                        </div>

                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <div className="flex items-center gap-4 md:mr-8 text-gray-300">
                            <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className="hover:text-white">Logout</button>
                        </div>
                        :
                        <div className="text-gray-300 md:mr-8">
                            <button className="mr-4 hover:text-white"><NavLink to="/login">Login</NavLink></button>
                            <button className="hover:text-white md:mr-8"><NavLink to="/register">Register</NavLink></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;