import { useState } from "react"
import Search from "./component/Search"
import FoodList from "./component/FoodList"
import Nav from "./component/Nav"
const App=()=> {
 const [foodData,setFoodData]=useState([]) 
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
     <FoodList foodData={foodData}/> 
    </div>
  )
}

export default App
