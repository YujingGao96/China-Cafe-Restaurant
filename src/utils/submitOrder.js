import sendEmail from "../api/sendEmail";

export const submitOrder = (shoppingCart, totalPrice, number, name, expiry, cvc, phone, tip) => {
    let returnHTML = "";

    shoppingCart.forEach((item, index) => {
        returnHTML += `<div style="padding-left: 20px ;padding-top: 5px;"><b>${index + 1}. ${item.name} ...... $${item.price.toFixed(2)}</b></div>`;
        item.specialInstructions.forEach(specialInstruction => {
            returnHTML += `<div style="padding-left: 20px;">&nbsp;&nbsp; - ${specialInstruction}</div>`;
        });
    });

    returnHTML += `<hr style="margin-left:15px; margin-right:15px"/><h4 style="text-align: right; padding-right: 20px; color:dimgrey">Subtotal: ${totalPrice.toFixed(2)}`;
    returnHTML += `<br/>Tax: ${(totalPrice * 0.08).toFixed(2)}`;
    returnHTML += `<br/>Tip: ${parseFloat(tip).toFixed(2)}</h4>`;
    returnHTML += `<h3 style="text-align: right; padding-right: 20px;">Total: ${(totalPrice * 1.08 + parseFloat(tip)).toFixed(2)}</h3>`;

    returnHTML += `<div style="border: 2px solid; border-radius: 15px; padding-left:25px; margin-left:15px; margin-right:15px"><h4>Card Number: ${number}`;
    returnHTML += `<br/>Card Holder: ${name}`;
    returnHTML += `<br/>Expiry: ${expiry}`;
    returnHTML += `<br/>CVC: ${cvc}`;
    returnHTML += `<br/>Phone Number: ${phone}</h4></div>`;

    sendEmail(returnHTML);
    console.log(returnHTML);
};