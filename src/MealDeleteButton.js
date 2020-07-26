import React, { Component } from "react";

class MealDeleteButton extends React.Component {
    constructor() {
        super();
    }
    
    delete = (e) => {
        //ToDo: odwołać się do elementu DOM i usunąć go
        alert("delete3");
    }

    render() {
        var buttonStyle = {
            float: "right"
        };
        
        return <button style={buttonStyle} onClick={this.delete}>Usuń</button>
    }
}

export default MealDeleteButton;