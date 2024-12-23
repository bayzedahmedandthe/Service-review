import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="pt-40">
            <h1 className="text-5xl font-bold text-gray-600  flex justify-center">404</h1>
            <p className="pt-4 flex justify-center">This is not the web page you are looking for</p>
            <div className="flex justify-center pt-4">
            <Link to="/"><button className="btn bg-[#00ca4c]">Go back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;