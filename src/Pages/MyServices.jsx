import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import moment from "moment";


const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myService, setMyService] = useState([]);
    const [search, setSearch] = useState("");
    const [updateValue, setUpdateValue] = useState({});
    const [reload, setReload] = useState(true);


    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=${user?.email}&searchparams=${search}`, {withCredentials: true})
            .then(res => setMyService(res.data))
    }, [user?.email, search, reload])


    // delete functionality
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "do you want to delete this service?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {


                        }
                        setMyService(prev => prev.filter(prevData => prevData._id !== _id))
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your service has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    // const { serviceImage, serviceTitle, description, category, price, _id, Date } = myService;

    const handleUpdate = (e) => {
        // console.log(e);
        // console.log(updateValue);
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const updateInitialData = { ...initialData, Date: moment().format("dddd, MMMM Do YYYY") };
        // console.log(updateInitialData);
        fetch(`http://localhost:5000/reviews/${updateValue?._id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateInitialData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setReload(!reload)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Service updated successfull",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });








        document.getElementById('my_modal_5').close()
    }





    return (
        <div className="bg-gray-50 rounded-lg mt-12">
            <Helmet>
                <title>My Services</title>
            </Helmet>
            <p className="text-end pr-24 pt-4 font-semibold">Search based on title</p>
            <div className="flex justify-end pt-2 pr-6">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Enter Service title" className="input input-bordered w-full max-w-xs" />
            </div>
            <h2 className=" text-xl font-semibold pt-6 px-6">My Service</h2>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-lg">NO.</th>
                            <th className="text-lg ">Title</th>
                            <th className="text-lg ">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myService.map((service, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{service.serviceTitle}</td>
                                    <td>{service.Date}</td>
                                    <td>
                                        <div className="flex items-center gap-2">

                                            {/* Open the modal using document.getElementById('ID').showModal() method */}

                                            <button onClick={() => {
                                                setUpdateValue(service)
                                                document.getElementById('my_modal_5').showModal()
                                            }} className="btn bg-[#00ca4c]">Update</button>



                                            <button onClick={() => handleDelete(service._id)} className="btn text-2xl text-red-500"><RiDeleteBin6Line /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* form container */}
                        <form
                            onSubmit={handleUpdate}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image</span>
                                </label>
                                <input type="url" name="serviceImage" defaultValue={updateValue.serviceImage} placeholder="Service Image-URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Title</span>
                                </label>
                                <input type="text" name="serviceTitle" defaultValue={updateValue.serviceTitle} placeholder="Service Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="text" name="companyName" defaultValue={updateValue.companyName} placeholder="Company Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Website</span>
                                </label>
                                <input type="text" name="website" defaultValue={updateValue.website} placeholder="Website" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={updateValue.category} placeholder="Category" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={updateValue.price} placeholder="Price" className="input input-bordered" required />
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
                                    defaultValue={updateValue.description}
                                    placeholder="Description"
                                    name="description"
                                    className="textarea textarea-bordered textarea-md w-full "></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#00ca4c]">Update Service</button>
                            </div>
                        </form>
                        {/* form container end */}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyServices;