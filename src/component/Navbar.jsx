import food from "../food.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    let[searchKey,setsearchKey]=useState(" ");
    localStorage.setItem("orders","[]");
    return ( 
        <nav>
        <div className="logo">
        <Link to="/"><img src={food} alt="logo" /></Link>
        <h1>Restaurant El-Dorado</h1>
        </div>
        <div className="search">
         <input type="search" value={searchKey} onChange={(e)=>{setsearchKey(e.target.value)}}/>
         <Link to={`/search${searchKey}`}><button>search</button></Link>
        </div>

        <div className="navlink">
            <Link to="/addfood">Add food</Link>
            <Link to="/orders">orders</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;