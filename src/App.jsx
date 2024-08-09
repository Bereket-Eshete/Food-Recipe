import { useState } from "react"
import Search from "./component/Search"
import FoodList from "./component/FoodList"
import Nav from "./component/Nav"
import Container from "./component/Container"
import InnerContainer from "./component/InnerContainer"
import FoodDetails from "./component/FoodDetails"
const App=()=> {
 const [foodData,setFoodData]=useState([]) 
 const [foodId,setFoodId]=useState('642583')
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/> 
        </InnerContainer>   
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer> 
      </Container>
     
    </div>
  )
}

export default App
