import React from 'react'
import axios from 'axios';

const ChatItemsPriceCard = ({items})=> {

    const [getId,setGetId] =React.useState(null);
    const [count,setCount] = React.useState(0);
    const [userOrders,setUserOrders] = React.useState([{}]);

    const increaseCount = ()=>{
        
        setCount(prevCount => prevCount+1);
  }

  const decreaseCount = ()=>{
    setCount(prevCount => prevCount>0 ? prevCount-1 : 0);
  }

  const addToCart =()=>{

    axios.post(
        'http://localhost:3500/orders',
        JSON.stringify({
            "id":userOrders.id,
            "user_id":items.dish_id,
            "dish_name":items.dish_name,
            "price":parseInt(items.price),
            "count":count,
        }),
        {
            headers:{
                'Content-Type':'application/json'
                
            }
        }
    ).then((response)=>{
        console.log(response.data);
        setUserOrders(response.log);
        
    }).catch((error)=>{
        console.log(error);
    })


}

    
  return (
    <div className='card' >

                    <div className='image_section'>
                        <img src={items.image_url} className='image_dish'/>
                    </div>

                    <div className='holder_section'>
                        <div className='section_one'>

                                <div className='section_one_one'>
                                    <p id='dish_name'>{items.dish_name}</p>
                                </div>
                                
                                <div className='section_one_two'>
                                    <button  onClick={decreaseCount} id='button_count'>-</button>
                                    <p id='count'>{count}</p>
                                    <button onClick={increaseCount} id='button_count'>+</button>
                                </div>

                                
                                    
                        </div>

                        <div className='section_two'>

                            <div className='section_two_one'>
                                <p ><span id='dolar_symbol'>$.</span><span id='price'>{items.price}</span></p>
                            </div>
                            
                                <button id='button_add' 
                                disabled={count<=0}
                                onClick={addToCart} >
                                    ADD
                                </button>
                            
                        </div>  
                    </div>
                </div>
  )
}

export default ChatItemsPriceCard