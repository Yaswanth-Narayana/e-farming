import React from "react";

function CartIteams(props) {
    const c=parseInt(props.quantity)*parseInt(props.rate);
    return <tr>
        <td>
            <div className="cartInfo">
                <img src={props.img} alt="Ehh" />
                <div><p>{props.title}</p>
                    <small>{props.rate}</small><br />
                    <button className='btn btn-danger'>Remove</button></div>
            </div>
        </td>
        <td><input type="number" value={props.quantity} /></td>
        <td>{c}</td>
    </tr>
}

export default CartIteams;