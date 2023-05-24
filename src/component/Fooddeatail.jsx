import useFetch from "../customHooks/useFetch";
import { useHistory, useParams,Link } from "react-router-dom";

const Fooddetails = () => {
    let{id}= useParams();

    let history = useHistory();
    let {data:items,pending,error}=useFetch("http://localhost:8080/items/"+id);

    let handleDeleteFood = ()=>{
        fetch("http://localhost:8080/delete/"+id )
        .then((response)=>{
            console.log(response.json());
            alert("food has been removed");
            history.push("/");
        }).then(e=>console.log(e))
    }
    return(
        <div >
          {error && <h1>{error}</h1>} 
          {pending && <div className="loader"></div>}
          { items && <div className="fooddetails">
                <img src={items.pic} alt="food" />
                <h1>Food-{items.foodName}</h1>
                <h3>Price-{items.price}Rs</h3>
                <h3>Rating-{items.ratings}*</h3>
                <h3 className={items.type=="veg"?"veg":"non-veg"}>Category-{items.type}</h3>
                <button onClick={handleDeleteFood}>Remove Food</button>
               <button> <Link to={`/update${id}`}>Update Food</Link></button>
                  </div>} 
        </div>
    );
}

 
export default Fooddetails;