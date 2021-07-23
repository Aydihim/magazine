import React from 'react';
import Button from "./Button";

function Card(props) {
    return (
        <div className="card">
        <div className="card-image">
            <img src={props.forCard.image} alt=""/>
        </div>
        <div className="card-info">
            <div className="card-name">
                {props.forCard.name}
            </div>
            <div className="card-price">
                {props.forCard.price}
            </div>
            <Button
                database = {props.database}
                setBought={props.setBought}
                id={props.id}
                bought={props.bought}
                    />
        </div>
        </div>
    );
}
export default Card;
