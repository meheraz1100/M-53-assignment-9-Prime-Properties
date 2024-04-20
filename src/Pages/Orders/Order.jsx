import OrderDetails from "../OrderDetails/OrderDetails";
import { getStoredAddCart } from "../Utils/Utility";


const Order = () => {
    const savedOrder = getStoredAddCart()
    console.log(savedOrder)

    return (
        <div>
            {
                savedOrder.map(property => <OrderDetails property={property} key={property.id}></OrderDetails>)
            }
        </div>
    );
};

export default Order;