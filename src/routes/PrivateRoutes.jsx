import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    console.log(location.pathname)
    if(loading) {
        return <span className="loading loading-bars loading-lg text-center"></span>
    }

    if(user){
        return children;
    }
    if(location?.pathname === '/orders'){
        toast.warn('Sign in first')
    }
    if(location?.pathname === '/contactUs'){
        toast.warn('Sign in first')
    }
    return <Navigate to="/signIn"></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoutes;