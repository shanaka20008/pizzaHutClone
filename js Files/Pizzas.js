

let cart = {
    total: 0
};

document.querySelectorAll(".add-BTN").forEach(button => {

    button.addEventListener("click", function() {

        
        let priceText = this.querySelector(".price").textContent;
        let priceValue = parseFloat(priceText.replace("RS. ", "").replace(",", "")); //remove unwanted strings and making it float value

        
        cart.total += priceValue;

        
        document.querySelector(".amount").textContent = cart.total.toFixed(2);

        document.querySelector(".final-amount").textContent = "Rs: " + cart.total.toFixed(2);

        
        document.querySelector(".infor-p-container").textContent = "";
    });
});
