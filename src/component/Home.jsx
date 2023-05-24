
import Foodlist from "./Foodlist";
import useFetch from "../customHooks/useFetch";

function Home()
{
 let {data:items,pending,error}=useFetch("http://localhost:8080/items");

    return(
        <div className="home">
            {error && <h1>{error}</h1>} 
          {pending && <div className="loader">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className="load">Loading....</span>
            </div>}
          { items && <Foodlist items={items} title="All food"/>}
        </div>
    );
}

export default Home;