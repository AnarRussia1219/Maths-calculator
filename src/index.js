import "./styles.scss";
import {mathParser} from "./mathParser.js";

// test parser
// console.log(mathParser("20 + 5 - 5 * 3")); // 25 - 15 = 10

const calculatorBtns = document.querySelectorAll(".calculator-btn");
const calculatorOperationsText = document.getElementById("calculator-operations-text");
let calculatorOperationsValue = calculatorOperationsText.textContent;

calculatorBtns.forEach((btn, index) => {
    // equal button event, checking it to be 0 because the equals button is the first button in the html
    if (index === 0) {
        btn.addEventListener("click", () => {
            if (!isNaN(calculatorOperationsText.textContent[0]) && !isNaN(calculatorOperationsText.textContent[calculatorOperationsText.textContent.length - 1])) {
                calculatorOperationsText.textContent = String(mathParser(calculatorOperationsValue));
                calculatorOperationsValue = calculatorOperationsText.textContent;
            } else {
                calculatorOperationsText.textContent = "ERROR!";
                calculatorOperationsValue = "";
            };
        });
    } else if (index === 1) {
        btn.addEventListener("click", () => {
            if (calculatorOperationsText.textContent.length > 0) {
                calculatorOperationsText.textContent = calculatorOperationsText.textContent.substring(0, calculatorOperationsText.textContent.length - 1);
                calculatorOperationsValue = calculatorOperationsText.textContent;
            };
        });
    } else {
        // other btns
        btn.addEventListener("click", () => {
            // get the data-value attribute and append it to the calculatorOperationsValue variable
            // console.log(btn.getAttribute("data-value"));
            calculatorOperationsValue += btn.getAttribute("data-value");
            calculatorOperationsText.textContent = calculatorOperationsValue;
            // console.log(calculatorOperationsValue);
        });
    }
});