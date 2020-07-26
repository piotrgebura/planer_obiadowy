import React, { Component } from "react";
import MealDeleteButton from "./MealDeleteButton";
import "./index.css";

class MealTemplate extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="mealTemplate"><div>{this.props.name}</div><MealDeleteButton key2={this.props.key2} delete={this.props.delete} /></div>;
    }
}

export default MealTemplate;