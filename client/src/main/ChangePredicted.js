import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";

class ChangePredicted extends Component {
    constructor() {
        super();
        this.state = {
            food_data: []
            // place where connects with sockets
        }
    }

    render() {
        return (
            <Container>
                <h2 className="h2Class"> Update Predicted</h2>
                <Table striped>
                    <thead>
                        <tr>
                            <th> Product</th>
                            <th> Predicted Qty </th>
                            <th> Update </th>
                        </tr>
                    </thead>
                </Table>
            </Container>
        )
    }
}

export default ChangePredicted;