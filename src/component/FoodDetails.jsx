import { useEffect, useState } from "react"

const FoodDetails =({foodId})=>{
    const[food,setFood]=useState({})
    const Url=`https://api.spoonacular.com/recipes/${foodId}/information`
    const Api_Key='e62a99a201ae4e0cbf9f07cee16b5c49'
    useEffect(()=>{
       async function fetchFood(){
            const resp= await fetch(`${Url}?apiKey=${Api_Key}`)
            const data= await resp.json()
            console.log(data)
            setFood(data)
        }
        fetchFood()
    },[foodId])
    return (
        <div>
        Food Details {foodId}
        {food.title}
         <img src={food.image}/>
        </div>
    ) 
}
export default FoodDetails