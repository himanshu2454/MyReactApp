import React, { useState } from 'react'

function HooksArray() {
    
    // const seedObject = { idd : 0 , valuee : "blank"}

    const [list , setList  ] = useState([])
    const [inp  , setInput ] = useState({idd : 0 , valuee : '', flag : false })

    const AddValues = () => {
        
        if ( inp.valuee == 'crazy' ){
            setList([...list , { id : inp.idd , value : "Omg! that's correct" }])
            setInput({idd : '', valuee : '', flag : true })

        }
        else{
            setList([...list , { id : inp.idd, value : "Eww ! Not true " }])
            setInput({idd : '', valuee : '', flag : false })
        }
        
        

    }

    return (
    
        <div>

            <span style={{ fontSize : "30px" }}>Shivangi is  :{' '}</span>
            <input type = "text" value = {inp.valuee} onChange = { e => setInput( { idd : inp.idd + 1 , valuee : e.target.value })}/>

            <button onClick= {AddValues}>Check</button>

            <ul>
                {
                    list.map( val => 
                    (
                        <li key = { val.id } style= { inp.flag ? {color : "green" }: {color : "red"} }>{val.value}</li>
                     
                ))}
            </ul>

        </div>
    )
}



export default HooksArray
