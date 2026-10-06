import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

    let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"];

  return(
      <React.Fragment>
        <h1>Healthy Food</h1>
        <ul className="list-group">
            {foodItems.map((item)=> (
                <li className="list-group-item">{item}</li>))}
        </ul>
      </React.Fragment>

  )
}
export default App