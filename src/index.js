import React from "react";
import ReactDOM from "react-dom";
import MealContainer from "./MealContainer";
import "./index.css";

// te dania trzeba pobierać z pliku txt
var mealTemplates = ["Naleśniki", "Pizza", "Wegańskie burgery", "Kotlet schabowy"];
ReactDOM.render(
    <MealContainer mealTemplates={mealTemplates} />, document.getElementById('mainContainer')
);