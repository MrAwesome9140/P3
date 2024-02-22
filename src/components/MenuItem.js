import React, { useState } from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({id, title, description, imageName, price, subtotal, setSubtotal, quantities, setQuantities}) => {
    var fullAltText = "Image of the " + title + " dish.";
    var fullImageName = "./images/" + imageName;

    const addQuantity = () =>{
        var newQuantities = [...quantities];
        newQuantities[id - 1]++;
        setQuantities(newQuantities);
        setSubtotal(subtotal + price);
    }

    const removeQuantity = () =>{
        if(quantities[id - 1] > 0){
            var newQuantities = [...quantities];
            newQuantities[id - 1]--;
            setQuantities(newQuantities);
            setSubtotal(subtotal - price);
        }
    }

    return (
        <div class="row menu-item">
            <div class="col-4">
                <img src={fullImageName} alt={fullAltText} class="menu-item-img"/>
            </div>
            <div class="col-8 text-box">
                <div class="row row-flex title-and-price">
                    <div class="col-6 item-title">
                        {title}
                    </div>
                    <div class="col-6 price">
                        <div class="sub-price">
                            {price}
                        </div>
                    </div>
                </div>
                <div class="row button-parent">
                    <div class="modify-cart">
                        <button class="remove-item modify-button" onClick={removeQuantity}>
                            <div class="modify-text">-</div>
                        </button>
                        <div class="quantity">{quantities[id - 1]}</div>
                        <button class="add-item modify-button" onClick={addQuantity}>
                            <div class="modify-text">+</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
