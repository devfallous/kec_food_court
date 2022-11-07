import React, { useState } from 'react'
import './CartBillSection.css'
import axios from 'axios'
import CartBillSectionTable from './CartBillSectionTable';
import GooglePay from './GooglePay';
import GooglePayButton from '@google-pay/button-react';

function CartBillSection() {

    const [userOrders,setUserOrders] = useState([{}]);
    const [jello,setJello] = useState(0);
    let orderTotalPrice = 0;

    React.useEffect(()=>{
        axios.get(
            'http://localhost:3500/orders'
        ).then((response)=>{
            console.log('response----',response.data);
            setUserOrders(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
        
    },[])

    const dishTotalPrice = (price,count)=>{
 
        return(price*count);
    }

    const removeFromCart = (id)=>{
        const new_Array = [...userOrders];
        const index = userOrders.findIndex((userOrders) => userOrders.id === id);
        console.log(index)
        
        axios.delete(
            `http://localhost:3500/orders/${id}`,
            
        ).then((response)=>{
            console.log(response.data);
            new_Array.splice(index, 1);
            setUserOrders(new_Array);
            
        }).catch((error)=>{
            console.log(error);
        })
        
    }

    const setJelloAnim = (jelloState) => {
        setJello(jelloState);
    }


  return (
    <div className='Cart_bill_section'>
        <table className='cart_table'>
            <thead>
                <tr>
                <td>NAME</td>
                <td>COUNT</td>
                <td>PRICE</td>
                <td>TOTAL</td>
                <td>ACTION</td>
                </tr>
            </thead>
            <tbody>

                {userOrders.map((orders)=>(

                    orderTotalPrice= orderTotalPrice+dishTotalPrice(orders.price,orders.count),

                    <CartBillSectionTable
                        orders={orders}
                        removeFromCart={removeFromCart}
                        setJelloAnim={setJelloAnim}
                    />

                ))}
                  
            </tbody>
        </table>

        <div className='cart_section'>

            <div className='total_section'>

                <div className='total_circle'>
                    <div className='total_pin_circle'>

                    </div>

                </div>

                <div className='total'>
                    <p id='order_bill_id'>Bill id : 20CSR192</p>
                    <hr></hr>
                    <div 
                        className='order_total_price_circle'
                        onAnimationEnd={() => setJello(0)}
                        jello={jello}>
                             <p id='order_total_price'jello={jello} >{orderTotalPrice}</p>
                    </div>
                </div>
            </div>
            <br></br>

            <div className='payment'>
                <p>PROCEED TO PAY</p>
                {/* <GooglePay/> */}

            </div>
        </div>

    </div>
  )
}

export default CartBillSection