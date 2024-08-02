const FoodList=()=>{
    return(
        <div>
            {foodData.map((food)=>{
           <h1>{food.title}</h1>
      })}
        </div>
    )
}
export default FoodList