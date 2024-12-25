import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myService, setMyService] = useState([]);
    const [search, setSearch] = useState("")
    // search functionality axios
    useEffect(() => {
        
    }, [search])


    //  query email search axios
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => setMyService(res.data))
    }, [user.email])
    return (
        <div className="bg-gray-50 rounded-lg mt-12">
            <Helmet>
                <title>My Services</title>
            </Helmet>
            <p className="text-end pr-24 pt-4 font-semibold">Search based on title</p>
            <div className="flex justify-end pt-2 pr-6">
                <input 
                onChange={(e) => setSearch(e.target.value)}
                type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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