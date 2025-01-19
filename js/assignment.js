"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");


const lostNumbers = [4, 8, 15, 16, 23, 42];




function returnTheRemainder(num1, num2) {
    return num1 % num2;
}


function checkIfEven(num) {
    return num % 2 === 0;
}


function getTheFourthElement(array) {
    return array[3];
}


submissionBtn.addEventListener("click",
     () => {
    
    const remainder = returnTheRemainder(5, 4);
    remainderElement.textContent = remainder;  
    const isEven = checkIfEven(47);
    checkIfEvenElement.textContent = isEven;  
    
    const fourthElement = getTheFourthElement(lostNumbers);
    lostNumbersElement.textContent = fourthElement; 
});

