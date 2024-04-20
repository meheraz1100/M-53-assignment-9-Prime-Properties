import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-[200px] lg:text-[400px] text-black">404</h2>
            <button className="btn btn-ghost text-5xl"><NavLink to="/">Go back to home</NavLink></button>         
        </div>
    );
};

export default ErrorPage;