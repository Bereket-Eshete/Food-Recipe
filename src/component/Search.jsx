import React, { useEffect } from "react";
import { useState } from "react";
const URL="https://api.spoonacular.com/recipes/complexSearch"
const Api_Key='e62a99a201ae4e0cbf9f07cee16b5c49'
const Search=({setFoodData})=>{
    const[search,setSearch]=useState('pasta')
    useEffect(
        ()=>{
          async function fetchFodd() {
                const res = await fetch(`${URL}?query=${search}&apiKey=${Api_Key}`);
                const data = await res.json();
                console.log(data);
                setFoodData(data);
            }
            fetchFodd()
        },[search]
    )
    return(
        <div>
            <input 
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
             />
        </div>
    )
}
export default Search