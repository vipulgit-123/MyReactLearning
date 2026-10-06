import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

   let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"];
    let foodItems1 = [];

    /*
    if(foodItems1.length === 0){
        return <h3>
            I am still hungry
        </h3>
    }
     */

    let emptyMessages =  foodItems1.length ===0 && <h3>I am still hungry</h3>
    // let emptyMessages =  foodItems1.length ===0 ? <h3>I am still hungry</h3> :null

  return(
      <React.Fragment>
        <h1>Healthy Food</h1>
        <ul className="list-group">
            {foodItems1
                .map((item)=> (
                <li key={item} className="list-group-item">{item}</li>))}
        </ul>
          {emptyMessages}
      </React.Fragment>

  )
}
export default App