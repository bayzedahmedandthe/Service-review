import axios from "axios";
import moment from "moment";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const AddService = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddServices = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const updateInitialData = {...initialData, Date: moment().format("dddd, MMMM Do YYYY")};
        console.log(updateInitialData);
        navigate("/myservices")
        axios.post("http://localhost:5000/reviews", updateInitialData)
        .then(res => {
            console.log(res.data);
        })
    }

    return (
        <div className="lg:w-6/12 mx-auto md:w-8/12">
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
                    <input defaultValue={user.email} type="email" name="email"  className="input input-bordered" required />
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
                    <button className="btn bg-[#00ca4c]">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;