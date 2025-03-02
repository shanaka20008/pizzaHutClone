

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


document.querySelectorAll(".option-selection-size").forEach(select => {

    select.addEventListener("change", function () {

        let card = this.closest(".main-div"); 

        let priceElement = card.querySelector(".price"); 

        if (priceElement) {

            let selectedOption = this.options[this.selectedIndex].text; // Get the selected option text

            let priceMatch = selectedOption.match(/Rs:\s?(\d+)/i); 

            if (priceMatch) {

                priceElement.textContent = "RS. " + priceMatch[1] + ".00"; 
            }
        }
    });
});

