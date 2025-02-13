
import { useLoaderData } from "react-router-dom";
import SingleService from "../Components/SingleService";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";


const Services = () => {
    const [serviceData, setServicesData] = useState([]);

    useEffect(() => {
        fetch("https://assaignment-11-server-site.vercel.app/reviews", )
        .then(res => res.json())
        .then(data => setServicesData(data))
    }, [])
       const [search, setSearch] = useState("");
        // search functionality fetch
        useEffect(() => {
            fetch(`https://assaignment-11-server-site.vercel.app/reviews?searchparams=${search}`, )
                .then(res => res.json())
                .then(data => {
                    setServicesData(data);
                })
        }, [search])
    return (
        <div className="w-11/12 mx-auto pt-32">
            <Helmet>
                <title>Service | All Service</title>
            </Helmet>
            <motion.h2
                animate={{ x: [20, 40, 20] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-semibold text-2xl">All <span className="text-[#30eaff]">services</span></motion.h2>
            <p className="text-end pr-24 pt-4 font-semibold">Search based on title</p>
            <div className="flex justify-end pt-2 pb-6 pr-6">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Enter Service title" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
                {
                    serviceData.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;