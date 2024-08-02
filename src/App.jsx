import { useState } from "react"
import Search from "./component/Search"
import FoodList from "./component/FoodList"

const App=()=> {
 const [foodData,setFoodData]=useState([]) 
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData}/>
      {/* <FoodList foodData={foodData}/> */}
    </div>
  )
}

export default App
