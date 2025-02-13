import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;
        // console.log(email, password);
        if (password.length < 6) {
            return toast.error("password must be 6 character")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(password)) {
            return toast.error("password must be one uppercase one lowercase")
        }
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate("/")
                toast.success("Registation successfull")
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser((prevUser) => { return { ...prevUser, displayName: name, photoURL: photo } })
                    })
                    .catch(error => {
                        console.log(error);
                        
                    })

            })
            .catch(error => {
                // console.log(error);
                toast.error("Already register")
            })

    }
    return (
        <div className="lg:w-6/12 mx-auto  pt-32">
            <Helmet>
                <title>Service | Register</title>
            </Helmet>
            <h2 className="text-[#a1bbbf  ] text-2xl font-semibold pl-8">Register now</h2>
            <form
                onSubmit={handleRegister}
                className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo-URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="photo-URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="bg-[#00032e] text-gray-300 hover:text-white md:py-2 md:px-4 rounded-md">Register</button>
                </div>
                <p className="pt-3">Alredy have an account! <Link className="hover:underline" to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;