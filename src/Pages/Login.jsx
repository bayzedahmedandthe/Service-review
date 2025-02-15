import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase.init";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import loginImg from "../assets/3094352-removebg-preview.png"


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/"
    const { loginUser, user } = useContext(AuthContext);
    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(from)
                toast.success("Login successfull")

            })
            .catch(error => {
                // console.log(error);
                toast.error("Invalid credentials")
            })
    }
    const provider = new GoogleAuthProvider();
    const handleLoginWithGoogle = () => {
        if (user) {
            return toast.error("you are already register")
        }
        signInWithPopup(auth, provider)
            .then(result => {
                // console.log(result.user);
                navigate(from)
                toast.success("Login successfull")
            })
            .catch(error => {
                // console.log(error);
            })
    }

    return (
        <div className="">
            <div className="w-11/12 mx-auto pt-32 ">
                <Helmet>
                    <title>Service | Login</title>
                </Helmet>
                <div className="md:flex items-center justify-between">
                    <div>
                        <div className="flex items-center lg:gap-12 md:gap-8 gap-2">
                            <div>
                                <h2 className=" font-semibold md:text-xl text-md lg:text-2xl">Login now</h2>
                            </div>
                            <button onClick={handleLoginWithGoogle} className="bg-[#00032e] text-gray-300 hover:text-white md:py-2 md:px-4 py-1 px-2 rounded-md flex gap-2 lg:gap-4"><span className="text-2xl"><FcGoogle /></span> Login with google</button>
                        </div>
                        <form
                            onSubmit={handleLoginUser}
                            className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#00032e] text-gray-300 hover:text-white md:py-2 md:px-4 py-1 px-2 rounded-md">Login</button>
                            </div>
                            <p className="pt-3">New to this website! <Link className="hover:underline" to="/register">register</Link></p>
                        </form>
                    </div>
                    <div>
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
