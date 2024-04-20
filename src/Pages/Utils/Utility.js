import { toast } from "react-toastify";

const getStoredAddCart = () => {
    const storedAddCart =localStorage.getItem('job-application');
    if(storedAddCart){
        return JSON.parse(storedAddCart);
    }
    return [];
}

const saveStoredAddCart = id => {
    console.log(id)
    const storedAddCarts = getStoredAddCart();
    const exists = storedAddCarts.find(jobId => jobId.id === id.id);
    if(!exists){
        storedAddCarts.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedAddCarts));
        toast.success('Added to cart');
    }
    else{
        toast('Already added')
    }
}

export { getStoredAddCart, saveStoredAddCart }