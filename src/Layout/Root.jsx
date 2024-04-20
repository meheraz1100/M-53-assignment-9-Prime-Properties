import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;