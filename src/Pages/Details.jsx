import Aos from "aos";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "../Components/rating";
import { AuthContext } from "../Components/AuthProvider";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import ratingChanged from "../Components/ratingChanged";
const Details = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        Aos.init()
    });
    const [value, setValue] = useState(0);
    // console.log(value);
    const [addReview, setAddReview] = useState([]);
    const [reload, setReload] = useState(true)
    const detailsData = useLoaderData();
    const { serviceImage, serviceTitle, description, category, price, _id, companyName, website, Date } = detailsData;

    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target;
        const textReview = form.textReview.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const reviewData = { textReview, name, email, photo };
        const updateReviewData = { ...reviewData, Date: moment().format("dddd, MMMM Do YYYY"), value, serviceId: _id, serviceTitle: serviceTitle }
        // console.log(updateReviewData);
        axios.post("https://assaignment-11-server-site.vercel.app/addReview", updateReviewData, )
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Review added successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        form.reset()
    }
    useEffect(() => {
        fetch(`https://assaignment-11-server-site.vercel.app/addReview/${_id}`, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                setAddReview(data);
                setReload(!reload)
            })
    }, [reload])

    return (
        <div className=" grid md:grid-cols-2 pt-32 gap-8 w-11/12 mx-auto">
            <Helmet>
                <title>Services Details</title>
            </Helmet>
            <div
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                className="bg-white shadow-xl rounded-lg p-4 h-[930px]">

                <img className="h-[160px] w-[280px] rounded-lg" src={serviceImage} alt="" />
                <p className="text-gray-500 pt-2">Post: {Date}</p>
                <h2 className="text-lg font-semibold py-3">{serviceTitle}</h2>
                <p className="font-semibold pb-2">Company: {companyName}</p>
                <p className="text-gray-500 max-w-[600px]">{description}</p>
                <p className="py-2">{website}</p>
                <p className="font-semibold py-2">{category}</p>
                <p><span className="font-semibold">Price</span>: {price}</p>
                <div className="pt-6">
                    <p className="py-2">Write your review</p>
                    <form
                        onSubmit={handleAddReview}
                        className="flex flex-col gap-3">
                        <textarea
                            placeholder="review"
                            name="textReview"
                            required
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                        <Rating value={value} setValue={setValue}></Rating>
                        <input type="text" name="name" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" defaultValue={user.email} className="input input-bordered w-full max-w-xs" />
                        <input type="url" name="photo" defaultValue={user.photoURL} className="input input-bordered w-full max-w-xs" />
                        <div className="flex justify-end my-4 text-gray-300">
                            <button className="bg-[#00032e] hover:text-white md:py-2 md:px-4 rounded-md">Add review</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="">
                {
                    addReview.map(review => <div key={_id}
                        className="shadow-xl py-8 rounded-xl"
                    >
                        <div className="flex items-center gap-4">
                            <img className="h-14 w-14 rounded-full ml-4" src={review.photo} alt="" />
                            <div>
                                <h3 className="text-lg font-bold py-1">{review.name}</h3>
                                <p className="text-gray-500">{review.email}</p>
                            </div>
                        </div>
                        <p className="text-xl font-semibold py-2 pl-4">{review.serviceTitle}</p>
                        <p className="font-semibold text-lg pl-4 pt-4">Rating: {review.value}</p>
                        <p className="pl-4 pt-4 text-gray-500">{review.textReview}</p>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Details;