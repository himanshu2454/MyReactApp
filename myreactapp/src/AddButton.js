import React , { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { BsFillPlusCircleFill } from 'react-icons/bs'



class AddButton extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

             Count : 3
        }
    }

    AddTodo(){

        this.setState({Count : this.state.Count + 1 })
    }

    render(){

        const cssstyle = {
            
            float : "left",
            backgroundColor : "red",
            radius : "1px"
        }

        return (

            <div >

            <button className = "TodoButton" onClick = { () => this.AddTodo() } style = { cssstyle } > 

                <BsFillPlusCircleFill />{' '}
                <span>Add Todo</span>

            </button>

            <span> Todo Count : { this.state.Count }</span>
        </div>
        );
    }

}



export default AddButton


