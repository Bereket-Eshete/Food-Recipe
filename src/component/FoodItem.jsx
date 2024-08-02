import './style.css'
const FoodItem =({food})=>{
    return(
        <div className='cont'>
        <img src={food.image} alt="" className='itemImg'/>
        <div className='itemCont'>
            <p className='itemName'>{food.title}</p>
            <button className='btn'>View Recipe</button>
        </div>
         
        </div>
    )
}
export default FoodItem