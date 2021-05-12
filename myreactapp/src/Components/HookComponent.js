import React, { Component } from 'react'

class HookComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

     onIncrement  = () => {

        this.setState({

            count : this.state.count + 1
            
        })

    }
    
    render() {
        return (
            <div>

                <button onClick= { this.onIncrement}> Clicked {this.state.count} times </button>

            </div>
        )
    }
}

export default HookComponent
