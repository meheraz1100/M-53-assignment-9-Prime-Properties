
import Banner from "../Banner/Banner"
import Slider from "../Slider/Slider";
import FeaturedEstate from "../FeaturedEstates/FeaturedEstates"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <FeaturedEstate></FeaturedEstate>
        </div>
    );
};

export default Home;