import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        
        <div className="font-poppins ">
            {/* navbar container start */}
            <div className="">
                <Navbar></Navbar>
            </div>
            {/* navbar container end */}
            {/* outlet container start */}
            <div className="">
                <Outlet></Outlet>
            </div>
            {/* outlet container end */}
            {/* footer container start */}
            <div className="bg-gray-100">
                <Footer className="w-11/12 mx-auto "></Footer>
            </div>
            {/* footer container end */}
        </div>
    );
};

export default Layout;