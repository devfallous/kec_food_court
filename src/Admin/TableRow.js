import React from 'react'
import axios from 'axios'
import './TableRow.css'


const TableRow = ({items,index,handleEditClickChange,handleRemoveClickChange})=> {

    
    const [dishEditName,setDishEditName]=React.useState (items.dish_name);
    const [dishEditCategory,setDishEditCategory]=React.useState(items.category);
    const [dishEditPrice,setEditPrice]=React.useState(items.price);
    const [dishEditImageUrl,setDishEditImageUrl]=React.useState(items.image_url);
    const [checkedBox, setCheckedBox] = React.useState(items.availability);


    const editChange = (event) => {
        handleEditClickChange(event,items);
    }

    const removeChange = () => {
        handleRemoveClickChange(items.id)
    }

    const checkChange = () => {


        setCheckedBox(prevAns => !prevAns)
        console.log(checkedBox)


        axios.put(
            `http://localhost:3500/food_items/${items.id}`,
            JSON.stringify({
                "id":items.id,
                "dish_name":items.dish_name,
                "price":parseInt(items.price),
                // "availability":items.availability,
                "category":items.category,
                "image_url":items.image_url
            }),
            {
                headers:{
                    'Content-Type':'application/json'
                    
                }
            }
        ).then((response)=>{
            console.log(response.data)
            console.log(checkedBox)
            
            
            
        }).catch((error)=>{
            console.log(error);
        })

    }

    console.log(index+1,checkedBox)

  return (

            <tr className='admin_table_row'>

                <td id='admin_table_cell'>{items.id}</td>

                <td id='admin_table_cell'>{items.dish_name}</td>

                <td id='admin_table_cell'>{items.price}</td>

                <td id='admin_table_cell'>{items.category}</td>

                {/* <td id='admin_table_cell'>
                    <input 
                        id='input_field'
                        type='checkbox'
                        name='availability'
                        defaultChecked={items.availability}
                        onClick={checkChange}
                    />
                    
                </td> */}

                <td id='admin_table_cell' className='admin_table_image_cell' >
                    <img src={items.image_url}/>    
                </td>

                <td id='admin_table_cell_actions'>
                    <button 
                        id='button_edit'
                        type='button' 
                        onClick={editChange}>
                            EDIT
                    </button>

                    <button
                        id='button_remove'
                        type='button' 
                        onClick={removeChange}>
                            REMOVE
                    </button>
                </td>

            </tr>

    
  )
}

export default TableRow