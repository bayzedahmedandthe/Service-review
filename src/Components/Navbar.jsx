import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import logo1 from "../assets/icons8-rating-100.png"

const Navbar = () => {
    const { logOutUser, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser(auth)
            .then(result => {
                toast.success("Logout successfull")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100">

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
                        <Link to="/"><li><a>Home</a></li></Link>
                        <Link to="/services"><li><a>Services</a></li></Link>
                        {
                            user && <div>
                                <Link to="/services"><li><a> Add Service</a></li></Link>
                                <Link to="/myreviews"><li><a> My Reviews</a></li></Link>
                                <Link to="/myservices"><li><a> My Services</a></li></Link>
                            </div>
                        }
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl"></a> */}
                <button className="h-16 w-16 flex justify-center"><Link to="/">
                <img src={logo1} alt="" /></Link>
                </button>
                <h2 className="text-[#00ca4c] font-semibold">Service Reviews</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <Link to="/services"><li><a>Services</a></li></Link>
                    {
                        user &&
                        <div className="flex items-center gap-2">
                            <Link to="/addservice"><li><a> Add Service</a></li></Link>
                            <Link to="/myreviews"><li><a> My Reviews</a></li></Link>
                            <Link to="/myservices"><li><a> My Services</a></li></Link>
                        </div>

                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn bg-[#00ca4c]">Logout</button>
                        </div>
                        :
                        <div>
                            <button className="btn bg-[#00ca4c] mr-4"><Link to="/login">Login</Link></button>
                            <button className="btn bg-[#00ca4c]"><Link to="/register">Register</Link></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;