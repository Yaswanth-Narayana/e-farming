import React from "react";
import CartItems from './Cart_Items';
import './App.css'

function Cart(){
    return <div className="container cartPage">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Sub Total</th>
            </tr>
            <tr>
                <td>
                        <div className="cartInfo">
                            <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg" alt="Ehh" />
                            <div><p>Title</p>
                            <small>Discription</small><br/>
                            <button className='btn btn-danger'>Remove</button></div>
                        </div>
                </td>
                <td><input type="number" value='2' /></td>
                <td>Rupees</td>
            </tr>
            <tr>
                <td>
                        <div className="cartInfo">
                            <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg" alt="Ehh" />
                            <div><p>Title</p>
                            <small>Discription</small><br/>
                            <button className='btn btn-danger'>Remove</button></div>
                        </div>
                </td>
                <td><input type="number" value='2' /></td>
                <td>Rupees</td>
            </tr>
            <tr>
                <td>
                        <div className="cartInfo">
                            <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg" alt="Ehh" />
                            <div><p>Title</p>
                            <small>Discription</small><br/>
                            <button className='btn btn-danger'>Remove</button></div>
                        </div>
                </td>
                <td><input type="number" value='2' /></td>
                <td>Rupees</td>
            </tr>
            <tr>
                <td>
                        <div className="cartInfo">
                            <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg" alt="Ehh" />
                            <div><p>Title</p>
                            <small>Discription</small><br/>
                            <button className='btn btn-danger'>Remove</button></div>
                        </div>
                </td>
                <td><input type="number" value='1'  /></td>
                <td>Rupees</td>
            </tr>
            {/* <CartItems img='https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg' rate='10' title='Tomato' quantity='5'/> */}
        </table>
        <div className="totalPrice">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>Total Price</td>
                </tr>
                <tr>
                    <td>Delivery Charge</td>
                    <td>Charge</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>Total</td>
                </tr>
            </table>
        </div>
    </div>
}

export default Cart;