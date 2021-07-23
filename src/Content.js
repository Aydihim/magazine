import React from 'react';
import Card from "./Card";

function Content(props) {
    const onlyproduct = props.database.map((product) => {
        return <Card
            forCard={product} setBought={props.setBought} id={product.id} bought={product.bought}
            />
    })
        return(
            <div className="content">
                {onlyproduct}
            </div>
        )
}

export default Content;