import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import './ChatItemsOrders.css'
import ChatItemsPriceCard from './ChatItemsPriceCard';

function ChatItemsOrders() {

    const [foodItems, setFoodItems] = useState([{}]);
   

    useEffect((event)=>{
        // event.preventDefault();
        axios.get(
            'http://localhost:3500/food_items?category=SNACKS'
        ).then((response)=>{
            console.log('response----',response.data);
            setFoodItems(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
        
    },[])

 
//   console.log('----',foodItems)  
  


    


  return (
    <div className='Chat_Items_Orders' >
    
            {foodItems.map((items)=>(

                <ChatItemsPriceCard 
                    items={items}

                />

            ))}

    </div>
  )
}

export default ChatItemsOrders