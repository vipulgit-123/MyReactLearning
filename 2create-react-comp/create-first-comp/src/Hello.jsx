function Hello() {
    let  myName = 'Vipul'
    let number = 1;

    let fullName = () =>{
        return 'Agnihotri'
    }

    return(
        <>
        <h3> Message : {number} Hello this is {myName} {fullName()} </h3>
            </>
    )

}

export default Hello