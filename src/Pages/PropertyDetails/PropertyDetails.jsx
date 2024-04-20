import { IoArrowBackCircleSharp } from "react-icons/io5";
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { saveStoredAddCart } from "../Utils/Utility"
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

const PropertyDetails = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const property = properties.find(property => property.id === idInt);
    console.log(property, idInt)
    // console.log(property.contact_information.phone)

    const handleAddToCart = () => {
        saveStoredAddCart(property);
    }
    return (
        <div>
            <NavLink to="/" className="tooltip" data-tip="Go back"><IoArrowBackCircleSharp className="text-3xl"></IoArrowBackCircleSharp></NavLink>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h2 className='text-4xl font-bold'>Property Details: </h2>
                    <img className='w-full' src={property.image} alt="" />
                    <div className="flex items-center">
                        <h2 className="text-3xl font-extrabold my-4">{property.property_name}</h2>
                        <h2 className="text-2xl font-bold"> - ${ property.price}</h2>
                    </div>
                    <h2 className="text-xl font-bold">{property.location}</h2>
                    <p className="text-xl">Segment Name: {property.segment_name}</p>
                    <div className="flex justify-around">
                    <div className="badge badge-secondary">{property.for_sale?`For Sale` : "For Rent"}</div>
                        <div className="text-center flex"><FaBed className="text-xl mx-2"></FaBed>{property.bedroom} Beds</div>
                        <div className="text-center flex"><FaBath className="text-xl mx-2"></FaBath>{property.bathroom}Baths</div>
                        <div className="text-center flex text-xl">Parking Space:<FaCarSide className="text-xl mx-2"></FaCarSide> {property.parking_availability} Cars</div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary w-full mb-4'>Contact Owner</button>
                    <button className="btn btn-primary w-full" onClick={handleAddToCart}>Add To Cart this Property</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;