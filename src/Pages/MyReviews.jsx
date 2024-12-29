import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Components/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    const [updateValue, setUpdateValue] = useState([]);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/addReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReview(data)
            })
    }, [user?.email, reload]);
    // console.log(myReview);
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "do you want to delete this review?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addReview/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {


                        }
                        setMyReview(prev => prev.filter(prevData => prevData._id !== _id))
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your review has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    const handleUpdate = (e) => {
        // console.log(e);
        // console.log(updateValue);
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(updateInitialData);
        fetch(`http://localhost:5000/addReview/${updateValue?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(initialData),
        })
            .then((res) => res.json())
            .then((data) => {
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
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center">My reviews</h2>
            {
                myReview.map(review => <div key={review._id} className="w-2/4 mx-auto shadow-xl rounded-lg my-6 py-6">
                    <h2 className="text-2xl font-semibold py-2 pl-4">{review.serviceTitle}</h2>
                    <p className="text-lg font-semibold py-2 pl-4">Rating: {review.value}</p>
                    <p className="text-gray-500 pl-4">{review.textReview}</p>
                    <div className="flex justify-end">
                        <div className="flex items-center gap-4 mt-6 mr-4">

                            <button onClick={() => {
                                setUpdateValue(review)
                                document.getElementById('my_modal_5').showModal()
                            }} className="btn bg-[#00ca4c]">Update</button>


                            <button onClick={() => handleDelete(review._id)} className="btn text-2xl text-red-500"><RiDeleteBin6Line /></button>
                        </div>
                    </div>
                </div>)
            }
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* form container */}
                    <form
                        onSubmit={handleUpdate}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name="serviceTitle" defaultValue={updateValue.serviceTitle} placeholder="Service Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name="value" defaultValue={updateValue.value} placeholder="Service rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                defaultValue={updateValue.textReview}
                                placeholder="Description"
                                name="textReview"
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
    );
};

export default MyReviews;