
import { useEffect } from "react";
import { useState } from "react";
import Real from "../Real/Real";


const Estates = () => {
    const [estate, setEstate] = useState([]);

    const [dataLength, setDataLength] = useState(3)

    useEffect( () =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setEstate(data));
    }, [])
    return (
        <div className="items-center">
            <h1 className="text-4xl my-3">Hey,</h1>
            <h1 className="text-3xl my-4">Our Offers Only for You...</h1>
            <div className="lg:grid grid-cols-3 gap-8">
                {
                    estate.slice(0, dataLength).map(estate => <Real estate={estate} key={estate.id}></Real>)
                }
            </div>
            <div className={ dataLength === estate.length ? 'hidden' : ''}>
                <button
                onClick={() => setDataLength(estate.length)} 
                className='btn btn-primary justify-center w-full'>Show All Property</button>
            </div>
        </div>
    )
}
export default Estates;