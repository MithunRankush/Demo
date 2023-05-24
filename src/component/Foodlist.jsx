import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"; 

const Foodlist = ({items,title}) =>{
 let[ordersId , setOdersId] = useState([]);
 let history =useHistory();

 useEffect(()=>{
    let orders = localStorage.getItem("orders");
    orders = JSON.parse(orders)
    let o = orders.map((v)=>{return v.id})
    setOdersId(o);
    console.log(ordersId);
 },[])
 
let handleOrders = (id) =>{
    fetch("http://localhost:8080/items/"+id)
    .then(res=>res.json())
    .then((data)=>{
        let newOrders = localStorage.getItem("orders");
        newOrders =JSON.parse(newOrders);
        newOrders.push(data);
        newOrders = JSON.stringify(newOrders);
        localStorage.setItem("orders",newOrders)
        alert("Food is ordered");

    })
    
}
 function RemoveOrders(id){
    let removeOrders = localStorage.getItem("orders");
     removeOrders = JSON.parse(removeOrders);
     let  start = removeOrders.findIndex( (v)=>{return v.id == id})
     removeOrders.splice(start,1);
     removeOrders = JSON.stringify(removeOrders);
     localStorage.setItem("orders",removeOrders);
     alert("food is removed");
     history.goBack();
    //  let j=0;
    //  let count=0;
    //  for (let index = 0; index < removeOrders.length; index++) {
    //     if(removeOrders[index].id===data){
    //         j=index;
    //         count++;

    //     }
       
    //  }
    //  if(count>0)
    //  {
    //     removeOrders.splice(j,1);
    //     removeOrders = JSON.stringify(removeOrders);
    //     localStorage.setItem("orders",removeOrders);
    //     alert("Food is removed");
    //     history.goBack();
    //  }
    

 }
    return(
        <div className="title">
        <h1>{title}</h1>
        <div className="food-list">
            {
                items.map((food)=>{return(
                    <div className="food">
                  <Link to={`/fooddetails${food.id}`}>
                    <img src={food.pic} alt="food" />
                    <h2>{food.foodName}</h2>
                    <h4>Rs-{food.price}</h4>
                  </Link>
                   {!ordersId.includes(food.id) && <button onClick={()=>{ handleOrders(food.id)}}>Order</button>}
                   {ordersId.includes(food.id) && <button onClick={()=>{ RemoveOrders(food.id)}}>Remove Order</button>}
                  </div>
                  )})
            }
        </div>
        </div>
    );
}
export default Foodlist;