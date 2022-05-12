import React from 'react';
import './User.css'

function User(props) {
    return (
        <div>
            <button onClick={this.handleClick}>Click me</button>
            <p>{props.ID} {props.Name} {props.Adress} </p>
        </div>
        )

}
// ID: {props.ID} Name: {props.Name} Adress: {props.Adress}
export default User;