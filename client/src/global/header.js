import React, { Component} from "react";
import { NavLink } from "react-router-dom";
import socketIOClient from "socket.io-client";
import "./header.css";

// Header composes of links that can be used to navigate
// between routes
var socket;
class Header extends Component {
    constructor() {
        super();
        let uri = process.env.NODE_ENV === 'production' ? 'https://dry-fjord-91856.herokuapp.com/' : 'http://localhost:5001';
        this.state = {
            endpoint: uri
        };
    socket = socketIOClient(this.state.endpoint);
    }


    render() {
        return (
            <header>
                <nav>
                    <ul className="NavClass">
                        <li>
                            <NavLink exact to ="/">
                                Place Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/updatepredicted">
                                Change Predicted
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/kitchen">
                                Kitchen
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://github.com/tddag">
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export { Header, socket };
