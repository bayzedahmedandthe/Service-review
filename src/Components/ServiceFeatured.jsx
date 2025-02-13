import axios from "axios";
import { motion } from "motion/react"
import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const ServiceFeatured = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        axios.get("https://assaignment-11-server-site.vercel.app/reviews/featured")
            .then(res => setServiceData(res.data))
    }, [])
    // console.log(serviceData);
    return (
        <div className="w-11/12 mx-auto">
            <motion.h2
                animate={{ x: [20, 40, 20] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-semibold text-2xl mb-10">Some of the <span className="text-[#30eaff]">services</span></motion.h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
                {
                    serviceData.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default ServiceFeatured;