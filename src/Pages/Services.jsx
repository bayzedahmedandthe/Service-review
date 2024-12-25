
import { useLoaderData } from "react-router-dom";
import SingleService from "../Components/SingleService";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";


const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Service | All Service</title>
            </Helmet>
            <motion.h2
                animate={{ x: [20, 40, 20] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-semibold text-2xl mb-10">All <span className="text-[#00ca4c]">services</span></motion.h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;