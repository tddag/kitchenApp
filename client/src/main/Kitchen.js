import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";
import { socket } from "../global/header";

class Kitchen extends Component {
    constructor() {
        super();
        this.state = {
            food_data: []
            // place where connects to with sockets
        }
    }

    getData = foodItems => {
        console.log(foodItems);
        this.setState({ food_data: foodItems });
    }

    componentDidMount() {
        socket.emit("initial_data");
        socket.on("get_data", this.getData);
    }

    getFoodData() {
        return this.state.food_data.map(food => {
            return (
                <tr key={food._id}>
                    <td> {food.name} </td>
                    <td> {food.ordQty} </td>
                    <td> {food.prodQty} </td>
                    <td> {food.predQty} </td>
                    <td> 
                        {/* <Button onClick={() => this.markDone(food._id)}> Done</Button> */}
                    </td>
                </tr>
            )
        })
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
                    <tbody>{this.getFoodData()}</tbody>
                </Table>
            </Container>
        );
    }
}

export default Kitchen;