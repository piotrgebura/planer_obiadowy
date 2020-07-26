import React, { Component } from "react";
import MealTemplate from "./MealTemplate";
import "./index.css";

class MealContainer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                mealTemplates: this.props.mealTemplates,
            };
    }

    addMealTemplate = (e) => {
        
        if (this._inputMeal.value != "") {
            var mealTemplates = this.state.mealTemplates;

            mealTemplates.unshift(this._inputMeal.value);
            
            this.setState({
                mealTemplates: mealTemplates
            });
    
            this._inputMeal.value = "";
        }

        e.preventDefault();
    }

    deleteMealTemplate = (key) => {

        var mealTemplates = this.state.mealTemplates;
        mealTemplates.splice(key, 1);

        this.setState({
            mealTemplates: mealTemplates
        });
    }
    
    render() {
        var renderData = [];
        
        for (var i = 0; i < this.state.mealTemplates.length; i++) {
            renderData.push(<MealTemplate key={i} name={this.state.mealTemplates[i]} key2={i} delete={this.deleteMealTemplate} />);
        }
        
        return <div className="mealContainer">
            <h2>Dania do wyboru</h2>
            {renderData}
            <div>
                <form onSubmit={this.addMealTemplate}>
                    <input type="text" name="mealName" placeholder="Wpisz nazwę posiłku" ref={
                        (el) =>this._inputMeal = el
                    } />
                    <input type="submit" value="Dodaj" />
                </form>
            </div>
        </div>;
    }
}

export default MealContainer;