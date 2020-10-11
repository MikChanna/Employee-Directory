import React from "react";

function UserRow(props) {

return <div className= "row">
    <div className = "col">
        <img alt = {props.name.first + props.name.last} src = {props.picture.thumbnail} />
    </div>
    <div className = "col">
        First Name: {props.name.first }
    </div>

    <div className = "col">
        Last Name: {props.name.last}
    </div>

    <div className = "col">
        Country: {props.location.country}
    </div>

    <div className = "col">
        Email: {props.name.last}
    </div>

    <div className = "col">
        Birthday: {props.dob.date}
    </div>
</div>

}

export default UserRow;