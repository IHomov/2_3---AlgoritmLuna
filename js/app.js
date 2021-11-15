let str = document.getElementById('inputData').value;

//remove spaces between numbers
let NumberCard = str.replace(/\s+/g, '').split("");

let Btn = document.querySelector('button');
Btn.addEventListener('click', () => {
    validateCred(NumberCard);
    console.log(NumberCard);
})


function validateCred(arr) {
    let sumArray = [];
    let numHolder = null;
    let everySecondNumber = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (everySecondNumber % 2 === 0) {
                numHolder = arr[i] * 2;
            if (numHolder > 9) {
                numHolder -= 9;
            }
        } else {
            numHolder = arr[i];
        }
        sumArray.push(numHolder);
        everySecondNumber++;
    }
    totalSum = sumArray.reduce((acc,val) => acc + val, 0);
    if (totalSum % 10 == 0) {
        Status.innerHTML = "true";
    } else {
        Status.innerHTML = "false";
    }
}