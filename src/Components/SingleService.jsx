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
            <div className="flex justify-end mt-10 text-gray-300 "><button className=" bg-[#00032e] hover:text-white md:py-2 md:px-4 rounded-md"><Link to={`/service/${_id}`}>See Details</Link></button></div>

        </div>
    );
};

export default SingleService;