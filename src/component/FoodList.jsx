import FoodItem from "./FoodItem"
const FoodList=({foodData})=>{
    return(
        <div>
            {foodData.map((food)=>
           <FoodItem key={food.id} food={food}/>
      )}
        </div>
    )
}
export default FoodList