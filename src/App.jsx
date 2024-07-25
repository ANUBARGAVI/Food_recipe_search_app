import React, { useState } from "react";
import Foodlist from "./components/foodlist";
import NavScrollExample from "./components/nav";
import './App.css'


function App(){
    const [foodData,setfoodData]=useState([]);
return (
<div className="App">

 <NavScrollExample foodData={foodData} setfoodData={setfoodData}/>
 <Foodlist foodData={foodData}/>
   
</div>

);






}
export default App;






















































