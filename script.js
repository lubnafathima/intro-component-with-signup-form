'use strict';
console.log("working");
let values = document.querySelectorAll("#inp");
let claim = document.querySelector(".claim");

function whenThereIsError(val) {
    val.nextElementSibling.style.display = "block";
    val.parentNode.nextElementSibling.style.display = "block";
}

claim.addEventListener("click", (e) => {
    values.forEach((input) => {
        if(!input.value) {
            whenThereIsError(input);
            // input.parentNode.nextElementSibling.innerHTML = "This cannot be Empty";
        } else {
            input.nextElementSibling.style.display = "none";
            input.parentNode.nextElementSibling.style.display = "none";
            if(input.type === "email") {
                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (!input.value.match(validRegex)) {
                    whenThereIsError(input);
                }              
            } else if(input.type === "text") {
                let nameCriteria = /^[a-z ,.'-]+$/i;
                if (!input.value.match(nameCriteria)) {
                    whenThereIsError(input);
                } 
            } else if(input.type === "password") {
                if (input.value.length < 8) {
                    whenThereIsError(input);
                }            
            }
        }
    });
});
