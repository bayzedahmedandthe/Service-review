import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const SingleService = ({ service }) => {
    useEffect(() => {
        Aos.init();
    })
    const { serviceImage, serviceTitle, description, category, price, _id } = service;

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="bg-white shadow-xl rounded-lg p-4">

            <img className="h-[160px] w-[280px] rounded-lg" src={serviceImage} alt="" />
            <h2 className="text-lg font-semibold py-3">{serviceTitle}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="font-semibold py-2">{category}</p>
            <p><span className="font-semibold">Price</span>: {price}</p>
            <div className="flex justify-end my-2"><button className="btn bg-[#00ca4c]"><Link to={`/service/${_id}`}>See Details</Link></button></div>

        </div>
    );
};

export default SingleService;