import React from 'react'
import '../style/Checkout.scss'

function Checkout() {
  return (
            <div className="container">
                <div className="title">
                    <h2>Product Order Form</h2>
                </div>
                <div className="d-flex">
                    <form action="" method="">
                        <label>
                            <span className="fname">First Name <span className="required">*</span></span>
                            <input type="text" name="fname"/>
                        </label>
                        <label>
                            <span className="lname">Last Name <span className="required">*</span></span>
                            <input type="text" name="lname"/>
                        </label>
                        <label>
                            <span>Company Name (Optional)</span>
                            <input type="text" name="cn"/>
                        </label>
                            <label>
                                <span>Country <span className="required">*</span></span>
                                <select name="selection">
                                    <option value="USA">United States</option>
                                    <option value="CAN">Canada</option>
                                    <option value="CZE">Czech Republic</option>
                                    <option value="SVK">Slovakia</option>
                                </select>
                            </label>
                        <label>
                            <span>Street Address <span className="required">*</span></span>
                            <input type="text" name="houseadd" placeholder="House number and street name" required />
                        </label>
                        <label>
                            <span>&nbsp;</span>
                            <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                        </label>
                        <label>
                            <span>Town / City <span className="required">*</span></span>
                            <input type="text" name="city"/>
                        </label>
                        <label>
                            <span>State / County <span className="required">*</span></span>
                            <input type="text" name="city"/>
                        </label>
                        <label>
                            <span>Postcode / ZIP <span className="required">*</span></span>
                            <input type="text" name="city"/>
                        </label>
                        <label>
                            <span>Phone <span className="required">*</span></span>
                            <input type="tel" name="city"/>
                        </label>
                        <label>
                            <span>Email Address <span className="required">*</span></span>
                            <input type="email" name="city"/>
                        </label>
                    </form>
                    <div className="Yorder">
                        <table>
                            <tbody>
                                <tr>
                                    <th colspan="2">Your order</th>
                                </tr>
                                <tr>
                                    <td>Product Name x 2(Qty)</td>
                                    <td>$88.00</td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$88.00</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Free shipping</td>
                                </tr>
                            </tbody>
                        </table><br></br>
                        <div>
                            <input type="radio" name="dbt" value="dbt" checked/> Direct Bank Transfer
                        </div>
                        <p>
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                        <div>
                            <input type="radio" name="dbt" value="cd"/> Cash on Delivery
                        </div>
                        <div>
                            <>
                            <input type="radio" name="dbt" value="cd"/> Paypal
                            </>
                                <span>
                                    <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"></img>
                                </span>
                        </div>
                        <button className = "place-order-button"type="button">Place Order</button>
                    </div>
                </div>
            </div>
  )
}

export default Checkout