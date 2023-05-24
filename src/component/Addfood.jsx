import {useRef} from "react";
import {useHistory,Link} from "react-router-dom";
const Addfood = () => {

  let history = useHistory();
  let foodname=useRef();
  let price=useRef();
  let rating=useRef();
  let picture=useRef();
//let id=useRef();
  let handleAddFood=(e)=>{
    e.preventDefault();
console.log(foodname.current.value);
    let newFood = {foodName:foodname.current.value,
                   price:price.current.value,
                   type:"",
                   ratings:rating.current.value,
                   pic:picture.current.value

                   }

    let options = document.getElementsByName("type");
    for(let i=0; i<options.length;i++)
    {
      if(options[i].checked)
      {
        newFood.type =options[i].value;
      }
    }

    fetch("http://localhost:8080/create",{method:"POST",
                                      headers:{"Content-Type":"application/json"},
                                    body:JSON.stringify(newFood)
                                  })

              .then((response)=>{
                console.log(response.json());
                alert("new food added");
                history.goBack();
              })
  }
 



    return (<div className="add-food">
      <h1>Add New Food</h1>
      <hr />
      <form onSubmit={handleAddFood}>
        <label >Food</label><input type="text" ref={foodname}/>
        <label >Price</label><input type="number" step="10" ref={price}/>
        <label >Type</label><div className="type-opt">
        <input type="radio" name="type" value="Veg"/><label >Veg</label>
        <input type="radio" name="type" value="Non-Veg"/><label>Non-Veg</label>
        </div>
        <label >Rating</label><input type="number" min="1" max="10" step="0.5" ref={rating}/>
        <label >Picture</label><input type="url" ref={picture}/>

         <input type="submit" value="Add food" />
         
      </form>
    </div>  );
}
 
export default Addfood;