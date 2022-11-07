import React from 'react';
import './FoodItemsCategories.css';
import dosa from './download.jpg';
import Navbar from './Navbar';
import Home from './Home';
import ChatItemsOrders from './ChatItemsOrders';
import ChatItemsPriceCard from './ChatItemsPriceCard';
import axios from 'axios';

function FoodItemsCategories() {

  const [foodItems, setFoodItems] = React.useState([{}]);
   
 React.useEffect(()=>{
  
    axios.get(
        'http://localhost:3500/food_items',
        {
          params: {
            category:['PAROTTA','BREAKFAST','EGG','BIRIYANI','FRIED RICE','NOODLES','GRAVY','NAAN']
          }
        }
    ).then((response)=>{
        console.log('response----',response.data);
        setFoodItems(response.data)
        
    }).catch((error)=>{
        console.log(error);
    })
    
  },[])

  const categoryArray=[];

  foodItems.map((items)=>(
      categoryArray.includes(items.category) ? categoryArray :  categoryArray.push(items.category)
  ))

  const arr=[];

  

  return (
    <div className='Food_Items_Categories'>


      <div className='category_list'>
          {
            categoryArray.map((items)=>(

              <a href=''><p id={items}>{items}</p></a>

            ))
          }
      </div>

      <div className='menu_list'>
        {
           categoryArray.map((items)=>(


            <p>items</p>,

            foodItems.map((dish)=>(

              <ChatItemsPriceCard 
                  dish={items} />

              
              
            ))
            



          ))
        }
      </div>

     



      
        
        {/* <div className='menu_list'>

          {
            categoryArray.map((items)=>(
              <p>items</p>,
               
                {foodItems.map((items)=>(
            
                  <ChatItemsPriceCard 
                  items={items} />
                  
                  ))}


               

            ))
          }


        </div> */}
        
<div className='menu_list'>
          {foodItems.map((items)=>(
            
            <ChatItemsPriceCard 
            items={items} />
            
            ))}
            </div>

    </div>
  )
}

export default FoodItemsCategories