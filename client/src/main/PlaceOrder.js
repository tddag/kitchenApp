import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";
import { socket } from "../global/header";

class PlaceOrder extends Component {
    constructor() {
        super();
        this.state = {
            food_data: []
            // this place to connect to with sockets
        }
    }

    getData = foodItems => {
        foodItems = foodItems.map(food => {
            food.order = 0;
            return food;
        });
        this.setState({ food_data: foodItems });
    }

    componentDidMount() {
        socket.emit("initial_data");
        socket.on("get_data", this.getData);
    }

    componentWillUnmount() {
        socket.off("get_data", this.getData);
    }

    // Place the order 
    sendOrder = id => {
        let order_details;
        this.state.food_data.map(food => {
            if (food._id == id) {
                order_details = food;
            }
            return food;
        });
        //console.log(order_details);
        socket.emit("putOrder", order_details);
        var new_array = this.state.food_data.map(food => {
            food.order = 0;
            return food;
        });
        // this.setState({ food_data: new_array});
    }

    // Changing the quantity in the state which is emitted to the backend 
    // at the time of placing the order
    changeQuantity = (event, foodid) => {
        if (parseInt(event.target.value) < 0) {
            event.target.value = 0;
        }
        var new_array = this.state.food_data.map(food => {
            if (food._id == foodid) {
                food.order = parseInt(event.target.value);
            }
            return food;
        });
        // console.log(new_array);
        this.setState({food_data: new_array});
    }

    // Get initial food data
    getFoodData() {
        return this.state.food_data.map(food => {
            return (
                <tr key={food._id}>
                    <td> {food.name} </td>
                    <td>
                        <input 
                            onChange = {e => this.changeQuantity(e, food._id)}
                            value={food.order}
                            type="number"
                            placeholder="Quantity"
                        />
                    </td>
                    <td>
                        <Button onClick={() => this.sendOrder(food._id)}>Order</Button>
                    </td>
                </tr>
            );
        });
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
                    <tbody>{this.getFoodData()}</tbody>
                </Table>
            </Container>
        )
    }
}

export default PlaceOrder;