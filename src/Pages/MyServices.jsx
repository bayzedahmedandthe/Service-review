import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myService, setMyService] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=${user?.email}&searchparams=${search}`)
            .then(res => setMyService(res.data))
    }, [user?.email, search])


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
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

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
                                            <button onClick={() => handleUpdate(service._id)} className="btn bg-[#00ca4c]">Update</button>
                                            <button onClick={() => handleDelete(service._id)} className="btn text-2xl text-red-500"><RiDeleteBin6Line /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;