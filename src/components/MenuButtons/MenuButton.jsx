import React, { useState } from 'react'
import { useFoodCartContext } from '../../context/RedOnionContext';

const MenuButton = () => {
    const { contextValue} = useFoodCartContext();
    const { filterItem, foodCategories, setFoodData, data } = contextValue

    
    const categoryFunc = (cat) => {
        
        if (cat === "all") {
        
            return (
                
                setFoodData(data[0])
               
                )
            }
            else {
                
            filterItem(cat)
            }
           
        }
  return (
      <section className='menu-btn-group'>
          <button className="menu-btn" onClick={()=>categoryFunc("all")}>Our Menu</button>
            {
                    foodCategories && foodCategories.map((category => {
                        return (

                            <button className="menu-btn" key={category} onClick={()=>categoryFunc(category)}>{category}</button>
                        )
                    }))
                }
    </section>
  )
}

export default MenuButton