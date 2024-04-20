import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Real = ({ estate }) => {
  const {property_name, id, location, for_sale,segment_name, price, discount, image, description, bedroom, bathroom, parking_availability, facilities} = estate;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="properties"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{property_name}</h2>
          <div className="flex text-xl items-center">
            <MdOutlineLocationOn></MdOutlineLocationOn>
            <p> {location}</p>
          </div>
          <p>{description}</p>
          <p className="text-sm">Segment Name: {segment_name}</p>
          <div className="flex text-sm ">
            
          </div>
          <p>${price}</p>
          <Link to={`propertyDetail/${id}`} className="card-actions justify-center">
            <button className="btn btn-primary w-full">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Real;
