
let cart = {

    total: 0
};


document.querySelector(".add-BTN").addEventListener("click", function() {

    let priceText = document.querySelector(".price").textContent; 

    let priceValue = parseFloat(priceText.replace("RS. ", "").replace(",", "")); // Extract numeric value
    
    cart.total += priceValue; 
});
