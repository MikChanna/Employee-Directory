import React from "react";

function Userrow(props) {

return <div className= "row">
    <div className = "col">
        <img alt = {props.firstName + props.lastName} src = {props.picture} />
    </div>
    <div className = "col">
        First Name: {props.firstName }
    </div>

    <div className = "col">
        Last Name: {props.lastName}
    </div>

    <div className = "col">
        Country: {props.country}
    </div>

    <div className = "col">
        Email: {props.email}
    </div>

    <div className = "col">
        Birthday: {props.birthday}
    </div>
</div>

}

export default Userrow;