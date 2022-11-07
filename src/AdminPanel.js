import React, {Fragment, useEffect, useState} from 'react'
import {nanoid} from 'nanoid';

import './AdminPanel.css'

import axios from 'axios'
import TableRow from './Admin/TableRow'
import EditableRow from './Admin/EditableRow'


function AdminPanel() {

    useEffect(()=>{
        axios.get(
            'http://localhost:3500/food_items'
        ).then((response)=>{
            console.log('response----',response.data);
            setFoodItems(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
        
    },[])

    const [foodItems, setFoodItems] = useState([{}]);
 
    const [dishName,setDishName]=useState('');
    const [dishCategory,setDishCategory]=useState('');
    const [dishPrice,setPrice]=useState(0);
    const [dishImageUrl,setDishImageUrl]=useState('');

    const [editFoodItems,setEditFoodItems] = useState({
            "dish_name":'',
            "price":parseInt(''),
            "category":'',
            "image_url":''   
    });

    const [editClick,setEditClick] = useState(null);

    const handleAddFoodItemsSubmit = (event) =>{


        axios.post(
            'http://localhost:3500/food_items',
            JSON.stringify({
                "id":foodItems.id,
                "dish_name":dishName,
                "price":parseInt(dishPrice),
                // "availability":true,
                "category":dishCategory,
                "image_url":dishImageUrl
            }),
            {
                headers:{
                    'Content-Type':'application/json'
                    
                }
            }
        ).then((response)=>{
            
            console.log(response.data);
            
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleEditClickChange =(event,foodItems) => {
        event.preventDefault();
        setEditClick(foodItems.id);

        const new_field = {

            "id": foodItems.key,
            "dish_name":foodItems.dish_name,
            "price":foodItems.price,
            "category":foodItems.category,
            "image_url":foodItems.image_url
            
        };

        setEditFoodItems(new_field);
    };

    const handleCancelClickChange = () => {
        setEditClick(null);
    };

    const handleRemoveClickChange = (id) => {

        const new_Array = [...foodItems];
        const index = foodItems.findIndex((foodItems) => foodItems.id === id);
    
        
        axios.delete(
            `http://localhost:3500/food_items/${id}`,
            
        ).then((response)=>{
            console.log(response.data);
            new_Array.splice(index, 1);
             setFoodItems(new_Array);
            
        }).catch((error)=>{
            console.log(error);
        })
        
       
    };


    
  return (
    <div className='Admin_Panel'>
        

        <div className='admin_panel_heading'>
            <p>ADMIN PANEL</p>
            
        </div>

        <br></br>
        <br></br>

        <form onSubmit={handleAddFoodItemsSubmit} className='form_addfield'>
            <input 
                id='input_field'
                type='text'
                name='dish_name'
                placeholder='Enter name'   
                value={dishName}        
                onChange={(e)=>{setDishName(e.target.value)}}
                
            />
             <input 
                id='input_field'
                type='number'
                name='price'
                placeholder='Enter price'
                onChange={(e)=>{setPrice(e.target.value)}}
                value={dishPrice}
            />

            <select
                 id='input_field'
                 name='category'
                 onChange={(e)=>{setDishCategory(e.target.value)}}
                 value={dishCategory}
                 >
                <option>PARROTTA</option>
                <option>NOODLES</option>
                <option>DRY ITEMS</option>
                <option>SOUP</option>
                <option>BIRIYANI</option>
            </select>

             {/* <input 
                id='input_field'
                type='text'
                name='category'
                onChange={(e)=>{setDishCategory(e.target.value)}}
                value={dishCategory}
            /> */}

            

             <input 
                id='input_field'
                type='text'
                name='image_url'
                onChange={(e)=>{setDishImageUrl(e.target.value)}}
                value={dishImageUrl}
            />
          
            <button type='submit' id='button__add'>ADD</button>
            <br></br>
        </form>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <form >

        <table className='admin_table'>

            <thead className ='admin_table_head'>
                <tr>
                <td id='admin_table_head'>S.NO</td>
                <td id='admin_table_head'>NAME</td>
                <td id='admin_table_head'>PRICE</td>
                <td id='admin_table_head'>CATEGORY</td>
                {/* <td id='admin_table_head'>AVAILABLE</td> */}
                <td id='admin_table_head'>IMAGE URL</td>
                <td id='admin_table_head_action'>ACTIONS</td>
                </tr>
            </thead>

            <tbody>
                
                {foodItems.map((items,index)=>(
                    <Fragment>

                        {editClick === items.id ?
                            (<EditableRow 
                                items={items} 
                                handleCancelClickChange={handleCancelClickChange}
                                setEditClick={setEditClick}/>
                            ) :
                            (<TableRow 
                                items={items}
                                index={index}
                                handleEditClickChange={handleEditClickChange}
                                handleRemoveClickChange={handleRemoveClickChange}
                                />
                            )
                        }
                           
                    </Fragment>


                ))}

            </tbody>
            
        </table>

        </form>
        


    </div>
  )
}

export default AdminPanel;