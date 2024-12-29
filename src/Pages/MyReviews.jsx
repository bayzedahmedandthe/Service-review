import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Components/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReview(data)
            })
    }, [user?.email]);
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
    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            {
                myReview.map(review => <div key={review._id} className="w-2/4 mx-auto shadow-xl rounded-lg my-6 py-6">
                    <h2 className="text-2xl font-semibold py-2 pl-4">{review.serviceTitle}</h2>
                    <p className="text-lg font-semibold py-2 pl-4">Rating: {review.value}</p>
                    <p className="text-gray-500 pl-4">{review.textReview}</p>
                    <div className="flex justify-end">
                        <div className="flex items-center gap-4 mt-6 mr-4">
                            <button className="btn bg-[#00ca4c]">Update</button>
                            <button onClick={() => handleDelete(review._id)} className="btn text-2xl text-red-500"><RiDeleteBin6Line /></button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyReviews;