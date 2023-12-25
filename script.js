var btnCheck = document.querySelector('#checkout');
var inputTxt = document.querySelector('#input');
var outputBox = document.querySelector('#output')


btnCheck.addEventListener('click', function functionName() {
    if((inputTxt.value%4==0) && ((inputTxt.value%400==0) || (inputTxt.value%100!==0))) {
        outputBox.innerText = inputTxt.value + ' is a leap year';
    }
    else {
        outputBox.innerText = inputTxt.value + ' is not a leap year';
        }        
})

