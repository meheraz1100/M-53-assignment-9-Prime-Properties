import React from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const OrderDetails = ({property}) => {
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h2 className='text-4xl font-bold my-4'>Property Details: </h2>
                    <img className='w-full' src={property.image} alt="" />
                    <div className="flex items-center">
                        <h2 className="text-3xl font-extrabold my-4">{property.property_name}</h2>
                        <h2 className="text-2xl font-bold"> - ${ property.price}</h2>
                    </div>
                    <h2 className="text-xl font-bold">{property.location}</h2>
                    <p className="text-xl">Segment Name: {property.segment_name}</p>
                    <div className="badge badge-secondary">{property.for_sale?`For Sale` : "For Rent"}</div>
                    <div className="flex justify-around">
                        <p>{property.bedroom} Beds</p>
                        <p>{property.bathroom}Baths</p>
                        <p>Parking Space: {property.parking_availability} Cars</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default OrderDetails;