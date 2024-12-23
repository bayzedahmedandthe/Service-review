import Aos from "aos";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "../Components/rating";
import { AuthContext } from "../Components/AuthProvider";
import moment from "moment";
// import ratingChanged from "../Components/ratingChanged";
const Details = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        Aos.init()
    })
    const detailsData = useLoaderData();
    const { serviceImage, serviceTitle, description, category, price, _id, Date } = detailsData;

    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target;
        const textReview = form.textReview.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const reviewData = { textReview, name, email, photo };
        const updateReviewData = {...reviewData, Date: moment().format("dddd, MMMM Do YYYY"),}
        console.log(updateReviewData);
    }
    return (
        <div className="lg:flex items-center gap-8">
            <div
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                className="bg-white shadow-xl rounded-lg p-4">

                <img className="h-[160px] w-[280px] rounded-lg" src={serviceImage} alt="" />
                <p className="text-gray-500 pt-2">Post: {Date}</p>
                <h2 className="text-lg font-semibold py-3">{serviceTitle}</h2>
                
                <p className="text-gray-500 max-w-[600px]">{description}</p>
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
                        <Rating></Rating>
                        <input type="text" name="name" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" defaultValue={user.email} className="input input-bordered w-full max-w-xs" />
                        <input type="url" name="photo" defaultValue={user.photoURL} className="input input-bordered w-full max-w-xs" />
                        <div className="flex justify-end my-4">
                            <button className="btn bg-[#00ca4c] max-w-[115px]">Add review</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Details;