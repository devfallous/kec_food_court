import React from 'react';
import './CartBillSection.css';


const CartBillSectionTable =({orders,removeFromCart,setJelloAnim})=> {

    // const [getId,setGetId] = useState(null);
    const [jello,setJello] = React.useState(0);

    const setJelloAnimation = ()=>{

        setJelloAnim(1);
    }



    const removeChange = () => {

        removeFromCart(orders.id)

    }

  return (
    
        <tr >
            <td>{orders.dish_name}</td>
            <td>{orders.count}</td>
            <td>{orders.price}</td>
            <td>{orders.price*orders.count}</td>
            <td>
                <button 
                    id='button__remove'
                    type='button' 
                    onClick={removeChange}
                    onClickCapture={setJelloAnimation}
                    >
                    REMOVE
                </button>
            </td>
        </tr>
                        
  )
}

export default CartBillSectionTable