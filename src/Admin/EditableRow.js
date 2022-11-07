import React, { useState } from 'react';
import axios from 'axios';
import './EditableRow.css';

const EditableRow = ({items,handleCancelClickChange,setEditClick}) => {

    const [dishEditName,setDishEditName]=useState (items.dish_name);
    const [dishEditCategory,setDishEditCategory]=useState(items.category);
    const [dishEditPrice,setEditPrice]=useState(items.price);
    const [dishEditAvailability,setDishEditAvailability]=useState(items.availability);
    const [dishEditImageUrl,setDishEditImageUrl]=useState(items.image_url);
    
    const handleEditFormSubmit = ()=>{
        axios.put(
            `http://localhost:3500/food_items/${items.id}`,
            JSON.stringify({
                "id":items.id,
                "dish_name":dishEditName,
                "price":parseInt(dishEditPrice),
                // "availability":dishEditAvailability,
                "category":dishEditCategory,
                "image_url":dishEditImageUrl
            }),
            {
                headers:{
                    'Content-Type':'application/json'
                    
                }
            }
        ).then((response)=>{
            console.log(response.data);
            setEditClick(null);
            
        }).catch((error)=>{
            console.log(error);
        })
    }
  
  return (

        <tr>
            <td id='edit_admin_table_cell'>{items.id}</td>

            <td id='edit_admin_table_cell'>

                <input 
                    type='text'
                    name='dish_name'
                    placeholder='Enter name'   
                    value={dishEditName}        
                    onChange={(e)=>{setDishEditName(e.target.value)}}
                />

            </td>

            <td id='edit_admin_table_cell'>

                <input 
                    type='text'
                    name='price'
                    placeholder='Enter price'
                    value={dishEditPrice}        
                    onChange={(e)=>{setEditPrice(e.target.value)}}
                />

            </td >

            

            <td id='edit_admin_table_cell'>

            <select
                 id='input_field'
                 type='text'
                 name='category'
                 placeholder='Enter category'
                 value={dishEditCategory}        
                 onChange={(e)=>{setDishEditCategory(e.target.value)}}
                >
                <option>PARROTTA</option>
                <option>NOODLES</option>
                <option>DRY ITEMS</option>
                <option>SOUP</option>
                <option>BIRIYANI</option>
            </select>

                {/* <input 
                    type='text'
                    name='category'
                    placeholder='Enter category'
                    value={dishEditCategory}        
                    onChange={(e)=>{setDishEditCategory(e.target.value)}}
                /> */}

            </td>

            {/* <td id='admin_table_cell'>
                    <input 
                        id='input_field'
                        type='checkbox'
                        name='availability'
                        checked={dishEditAvailability}
                    />
                    
            </td> */}

            <td id='edit_admin_table_cell'>

                <input 
                    type='text'
                    name='image_url'
                    placeholder='Paste url'
                    value={dishEditImageUrl}        
                    onChange={(e)=>{setDishEditImageUrl(e.target.value)}}                />

            </td>

            <td id='edit_admin_table_cell'>
                    <button 
                        type='submit'
                        onClick={()=>{handleEditFormSubmit()}}>
                        SAVE
                        
                    </button>
                    <button 
                        type='button'
                        onClick={handleCancelClickChange}>
                        CANCEL
                    </button>
            </td>
        </tr> 
    
  )
}

export default EditableRow