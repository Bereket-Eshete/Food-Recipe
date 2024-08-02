import React, { useEffect } from "react";
import { useState } from "react";
import './style.css'
const URL="https://api.spoonacular.com/recipes/complexSearch"
const Api_Key='e62a99a201ae4e0cbf9f07cee16b5c49'
const Search=({foodData,setFoodData})=>{
    const[search,setSearch]=useState('pasta')
    useEffect(
        ()=>{
          async function fetchFodd() {
                const res = await fetch(`${URL}?query=${search}&apiKey=${Api_Key}`);
                const data = await res.json();
                console.log(data.results)
                setFoodData(data.results);
            }
            fetchFodd()
        },[search]
    )
    return(
        <div className="searchCont">
            <input 
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="searchItem"
             />
        </div>
    )
}
export default Search