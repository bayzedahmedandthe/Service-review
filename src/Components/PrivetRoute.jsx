import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to="/login" state={location?.pathname}></Navigate>
        </div>
    );
};

export default PrivetRoute;