import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Fooditems from "./component/Fooditems.jsx";
import ErrorMessage from "./component/ErrorMessage.jsx";

function App() {

   let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"];
    // let foodItems = [];

  return(
      <React.Fragment>
        <h1>Healthy Food</h1>
          <Fooditems foodItems={foodItems}/>
          <ErrorMessage foodItems={foodItems} />
      </React.Fragment>

  )
}
export default App