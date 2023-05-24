import './App.css';
import React from 'react';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Addfood from './component/Addfood';
import Fooddetails from './component/Fooddeatail';
import Searchfood from './component/Searchfood';
import Updatefood from './component/Updatefood';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Orders from './component/Orders';

function App()
{
  return(
   <BrowserRouter>
    <div className='App'>
      <Navbar></Navbar>
      <Switch>
        
      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/addfood">
      <Addfood/>
      </Route>

      <Route path="/fooddetails:id">
      <Fooddetails/>
      </Route>

      <Route path="/search:searchKey">
      <Searchfood></Searchfood>
      </Route>
      
      <Route  path="/update:id">
      <Updatefood></Updatefood>
      </Route>

      <Route path = "/orders">
        <Orders></Orders>
      </Route>

      </Switch>
      
    </div>
   </BrowserRouter>
  )
}
export default App;