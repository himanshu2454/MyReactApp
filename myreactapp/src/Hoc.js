import React, { Component } from 'react'


const Updatedcomp  = OrigComp => {

    class Newcomp extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 
                count : 0
            }
        }

        onIncrement =  () => {

            this.setState( prevstate => {
                return {

                    count : prevstate.count + 1

                }
            })
            
        }
        

        render(){

            return <OrigComp count = {this.state.count} onIncrement = {this.onIncrement} />
        }
    }

    return Newcomp

}

export default Updatedcomp