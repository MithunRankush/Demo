import { useEffect, useState } from "react";
import Foodlist from "./Foodlist";

const Orders = () => {
    let[orders,setOders] = useState(null);
        useEffect(()=>{
            let foodOrdered = localStorage.getItem("orders");
            foodOrdered = JSON.parse(foodOrdered);
            console.log(foodOrdered);
            setOders(foodOrdered);
        },[])
    return ( 
        <div>
            {orders && <Foodlist items ={orders} title="food ordered" />}
        </div>
        
     );
}
 
export default Orders;