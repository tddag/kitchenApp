import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";

class PlaceOrder extends Component {
    constructor() {
        super();
        this.state = {
            food_data: []
            // this place to connect to with sockets
        }
    }

    render() {
        return (
            <Container>
                <h2 className="h2Class"> Order Menu </h2>
                <Table striped>
                    <thead>
                        <tr>
                            <th> Product </th>
                            <th> Quantity </th>
                            <th> Order </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </Container>
        )
    }
}

export default PlaceOrder;