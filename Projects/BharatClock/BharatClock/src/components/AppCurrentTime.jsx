let AppCurrentTime = () => {
let time = new Date();
    return(
        <p className ="lead" >This is the current Time :{time.toLocaleTimeString()}{" "}
         & current Date {time.toLocaleDateString()}</p>
    );

}
export default AppCurrentTime