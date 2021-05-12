import React, { Component } from 'react'
import Updatedcomp from './Hoc'


class hocchild extends Component {
    

    render() {

        const { count , onIncrement } = this.props

        return (
            
            <>
                <button onClick = {onIncrement}>
                    clicked {count} times
                </button>
            </>
        )
    }
}

export default Updatedcomp(hocchild)
