import React from "react";
import ReactDOM from "react-dom";
import MealContainer from "./MealContainer";


// te dania trzeba pobierać z pliku txt
var meals = ["Naleśniki", "Pizza", "Wegańskie burgery", "Kotlet schabowy"];
ReactDOM.render(
    <MealContainer meals={meals} />, document.getElementById('mainContainer')
);