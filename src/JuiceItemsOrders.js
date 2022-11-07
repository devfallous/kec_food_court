import React from 'react'
import ChatItemsPriceCard from './ChatItemsPriceCard';
import axios from 'axios';
import './ChatItemsOrders.css'
import './JuiceItemsOrders.css'

function JuiceItemsOrders() {
  
        const [foodItems, setFoodItems] = React.useState([{}]);
   

   React.useEffect((event)=>{
    //  event.preventDefault();
       axios.get(
           'http://localhost:3500/food_items?category=JUICE'
       ).then((response)=>{
           console.log('response----',response.data);
           setFoodItems(response.data)
           
       }).catch((error)=>{
           console.log(error);
       })
       
   },[])


//   console.log('----',foodItems)  
 


   


 return (
   <div className='Juice_Items_Orders' >
   
           {foodItems.map((items)=>(

               <ChatItemsPriceCard 
                   items={items}

               />

           ))}

   </div>
 )
}
    


export default JuiceItemsOrders