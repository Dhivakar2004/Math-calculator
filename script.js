let display= document.getElementById("display");

let numbers= document.getElementsByClassName("numbers");

for (let i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        display.value += numbers[i].innerText;
    });
}

let operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener("click", function () {

        let clickedOperator = operators[i].innerText;
        let lastChar = display.value.slice(-1);

        // Display is empty
        if (display.value === "") {

            if (clickedOperator === "-") {
                display.value += "-";
            }

            else if (clickedOperator === ".") {
                display.value += "0.";
            }

            return;
        }

        // Don't allow two operators together
        if ("+-*/%.".includes(lastChar)) {
            return;
        }

        display.value += clickedOperator;

    });

}
let clear= document.getElementById("clear");
clear.addEventListener("click", function(){
    display.value= "";
});
let backspace= document.getElementById("backspace");
backspace.addEventListener("click", function(){
    display.value= display.value.slice(0, display.value.length-1);
}); 
let equals= document.getElementById("equals");
equals.addEventListener("click", function(){
    if (display.value === "") {
        return;
    }
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        display.value += event.key; 
    } 
    else if ("+-*/%.".includes(event.key)) {
         // Display is empty
        if (display.value === "") {

            if (event.key === "-") {
                display.value += "-";
            }
            else if (event.key === ".") {
                display.value += "0.";
            }
            return;
        }
        let lastChar = display.value.slice(-1);     
        // Don't allow two operators together
        if ("+-*/%.".includes(lastChar)) {
            return;
        }

        display.value += event.key;
    }
    else if (event.key === "Enter") {
        if (display.value === "") {
               return;
        }
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }       
    } 
    else if (event.key === "Backspace") {
        display.value = display.value.slice(0,-1);
    }  
});    