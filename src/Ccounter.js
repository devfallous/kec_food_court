import React from 'react'

function Ccounter() {

    const [count,setCount]=React.useState(0)

    function add(){
        setCount((prev)=>
        {
            return prev+1
        })

    }

    function sub(){
        setCount((prev)=>
        {
            if(prev>0)
            return prev-1
            else
            return 0
        })

    }

    const [ans,setAns]=React.useState(true)
    // const state=true;

    function ansfunc(){
        setAns(state=> !state )
        
    } 
        



  return (
    <div>

        <button onClick={sub}>-</button>
        <h1 onClick={ansfunc}>{ans ? "yes" : "no"}</h1>
        <button onClick={add}>+</button>

    </div>
  )
}

export default Ccounter