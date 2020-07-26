import React, { Component } from "react";
import MealDeleteButton from "./MealDeleteButton";

class Meal extends React.Component {
    
    render() {
        var divStyle = {
            height: 50,
            padding: 10,
            marginBottom: 10,
            borderStyle: "solid",
            borderColor: "black"
        };
        
    return <div style={divStyle}><div>{this.props.name}</div><MealDeleteButton /></div>;
    }
}

export default Meal;