import './style.css'
const FoodItem =({food,setFoodId})=>{
    return(
        <div className='cont'>
        <img src={food.image} alt="" className='itemImg'/>
        <div className='itemCont'>
            <p className='itemName'>{food.title}</p>
            <button className='btn'
                    onClick={()=>{
                        console.log(food.id)
                        setFoodId(food.id)

                    }}
                >View Recipe</button>
        </div>
         
        </div>
    )
}
export default FoodItem