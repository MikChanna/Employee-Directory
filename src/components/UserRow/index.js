import React from "react";

function Userrow(props) {

return <tr className= "row">
    <td className = "col">
        <img alt = {props.firstName + props.lastName} src = {props.picture} />
    </td>
    <td className = "col">
        <p>{props.firstName } </p>
    </td>

    <td className = "col">
        <p>{props.lastName}</p>
    </td>

    <td className = "col">
        <p>{props.email}</p>
    </td>

    <td className = "col">
        <p>{props.birthday}</p>
    </td>

    <td className = "col">
        <p>{props.country}</p>
    </td>
</tr> 

}

export default Userrow;