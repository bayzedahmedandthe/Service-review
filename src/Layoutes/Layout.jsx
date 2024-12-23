import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        
        <div className="font-poppins ">
            {/* navbar container start */}
            <div className="pt-8 w-11/12 mx-auto">
                <Navbar></Navbar>
            </div>
            {/* navbar container end */}
            {/* outlet container start */}
            <div className="py-10 w-11/12 mx-auto">
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