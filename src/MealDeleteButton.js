import React, { Component } from "react";

class MealDeleteButton extends React.Component {
    constructor() {
        super();
    }
    
    delete = () => {
        //ToDo: znaleźć inny sposób na odwołanie się do key, zamiast przekazywać key2
        this.props.delete(this.props.key2);
    }

    render() { 
        return <button className="deleteButton" onClick={this.delete}>Usuń</button>
    }
}

export default MealDeleteButton;