let cart = JSON.parse(localStorage.getItem("cart")) || { total: 0 }; //|| { total: 0 } is used to set the default value of cart.total to 0 if it is not present in localStorage



document.querySelector(".amount").textContent = cart.total.toFixed(2);
document.querySelector(".final-amount").textContent = "Rs: " + cart.total.toFixed(2);

document.querySelectorAll(".add-BTN").forEach(button => {

    button.addEventListener("click", function() {

        let priceText = this.querySelector(".price").textContent;
        let priceValue = parseFloat(priceText.replace("RS. ", "").replace(",", ""));

        cart.total += priceValue;

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        document.querySelector(".amount").textContent = cart.total.toFixed(2);
        document.querySelector(".final-amount").textContent = "Rs: " + cart.total.toFixed(2);
        document.querySelector(".infor-p-container").textContent = "";
    });
});

document.querySelectorAll(".option-selection-size").forEach(select => {

    select.addEventListener("change", function() {

        let card = this.closest(".main-div"); 
        let priceElement = card.querySelector(".price"); 

        if (priceElement) {
            let selectedOption = this.options[this.selectedIndex].text;
            let priceMatch = selectedOption.match(/Rs:\s?(\d+)/i); 

            if (priceMatch) {
                priceElement.textContent = "RS. " + priceMatch[1] + ".00"; 
            }
        }
    });
});


// Reset total when checkout button is clicked
document.querySelector(".check-out-btn").addEventListener("click", function() {
    cart.total = 0;

    
    localStorage.setItem("cart", JSON.stringify(cart));

    document.querySelector(".amount").textContent = cart.total.toFixed(2);
    document.querySelector(".final-amount").textContent = "Rs: " + cart.total.toFixed(2);
});
