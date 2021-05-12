import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';




class FormBody extends Component {

    constructor(props) {

        super(props)

        this.state = {

            Desc: ""
        }
    }

    onUsernamechange(event) {

        this.setState({ username: event.target.value })
    }


    render() {
        return (
            <div>
                <form>
                    <Row>
                        <Col>
                            <select >
                                <option>val1</option>
                                <option>val2</option>
                                <option>val3</option>
                            </select>
                            <label style={{ padding: "5px" }} >Todo Desc</label>
                            <textarea value={this.state.desc} onChange={this.onDescChange}></textarea>

                        </Col>
                    </Row>
                </form>


            </div>
        )
    }
}

export default FormBody

