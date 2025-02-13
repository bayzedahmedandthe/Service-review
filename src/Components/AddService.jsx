import axios from "axios";
import moment from "moment";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddService = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddServices = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const updateInitialData = { ...initialData, Date: moment().format("dddd, MMMM Do YYYY") };
        // console.log(updateInitialData);
        navigate("/myservices")
        axios.post("https://assaignment-11-server-site.vercel.app/reviews", updateInitialData)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Service added successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                // console.log(res.data);
            })
    }

    return (
        <div className="lg:w-6/12 mx-auto md:w-8/12 pt-32">
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center">Add a <span className="text-[#30eaff]">Service</span></h2>
            <form
                onSubmit={handleAddServices}
                className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input type="url" name="serviceImage" placeholder="Service Image-URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input type="text" name="serviceTitle" placeholder="Service Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="companyName" placeholder="Company Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Website</span>
                    </label>
                    <input type="text" name="website" placeholder="Website" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input defaultValue={user?.email} type="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        placeholder="Description"
                        name="description"
                        className="textarea textarea-bordered textarea-md w-full "></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="bg-[#00032e] text-gray-300 hover:text-white md:py-2 md:px-4 rounded-md">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;