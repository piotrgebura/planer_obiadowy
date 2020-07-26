import React, { Component } from "react";
import Meal from "./Meal";

class MealContainer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                meals: this.props.meals,
            };
    }
    
    render() {
        var renderData = [];
        
        for (var i = 0; i < this.state.meals.length; i++) {
            renderData.push(<Meal key={i} name={this.state.meals[i]} />);
        }
        
        return <div>{renderData}</div>;
    }
}

export default MealContainer;