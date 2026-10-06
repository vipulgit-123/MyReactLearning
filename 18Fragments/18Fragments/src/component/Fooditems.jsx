import Item from "./Item.jsx";

const Fooditems = (props) => {
    return (
 <ul className="list-group">
            {props.foodItems
                .map((item)=> (
                    <Item key={item} fooditem={item}/>
                ))}

        </ul>
    )
}

export default Fooditems