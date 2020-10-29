const calculateTax = subtotal => {
    return parseFloat((subtotal * 0.08).toFixed(2));
};

export default calculateTax;