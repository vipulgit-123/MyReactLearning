const ErrorMessage =(props)=>
{
    return(
        <>
        {props.foodItems.length ===0 && <h3>I am still hungry</h3>}
    </>
    )
}
export default ErrorMessage