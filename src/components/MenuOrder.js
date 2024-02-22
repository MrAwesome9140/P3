import React from "react";

const MenuOrder = ({subtotal, numItems, setQuantities, setSubtotal, orderAlert}) => {
    // This component will display the subtotal as well as an "Order" and "Clear All" button.
    var sub = "Subtotal: $" + Math.round(subtotal * 100) / 100;

    const clearAll = () =>{
        var newQuantities = [];
        for (var i = 0; i < numItems; i++) {
            newQuantities.push(0);
        }
        setQuantities(newQuantities);
        setSubtotal(0);
    }

    return (
        <div class="row order">
            <div class="col-6 subtotal">
                {sub}
            </div>
            <div class="col-6 ordering-buttons">
                <button class="order-button" onClick={orderAlert}>Order</button>
                <button class="clear-button" onClick={clearAll}>Clear All</button>
            </div>
        </div>
    );
}

export default MenuOrder;