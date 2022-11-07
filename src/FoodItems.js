import React from 'react'
import './FoodItems.css';
import Navbar from './Navbar';
import FoodItemsCategories from './FoodItemsCategories';
import Loading from './Assets/Loading.gif';




function FoodItems() {

 

  return (
    <div className='Food_Items'>
      
        <FoodItemsCategories />
    </div>
  )
}

export default FoodItems