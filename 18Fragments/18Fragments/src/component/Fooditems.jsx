import Item from "./Item.jsx";

const Fooditems = ({foodItems}) => {
    return (
 <ul className="list-group">
            {foodItems
                .map((item)=> (
                    <Item key={item} fooditem={item}/>
                ))}

        </ul>
    )
}

export default Fooditems