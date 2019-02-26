import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";

class Kitchen extends Component {
    constructor() {
        super();
        this.state = {
            food_data: []
            // place where connects to with sockets
        }
    }
    render() {
        return (
            <Container>
                <h2 className="h2Class"> Kitchen Area</h2>
                <Table striped>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Quantity </th>
                        <th> Created Till Now </th>
                        <th> Predicted </th>
                        <th> Status </th>
                    </tr>
                </thead>
            </Table>
            </Container>
        );
    }
}

export default Kitchen;