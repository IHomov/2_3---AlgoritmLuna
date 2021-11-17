

let Btn = document.querySelector('button');


// event handler for the button
Btn.addEventListener('click', () => {
    let str = document.getElementById('inputData').value;
    Moon_Algorithm(str);
    ChekType(str);

})

/*Moon_Algorithm - card validity check */
function Moon_Algorithm(setValue) {
        let ch = 0;
        const isOdd = setValue.length % 2 !== 0;
    if ('' === setValue) return false;
    
        for (let i = 0; i < setValue.length; i++) {
            let n = parseInt(setValue[i], 10);
            ch += (isOdd | 0) === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
    }
    
        if ((ch % 10) == 0) {
            Status.innerHTML = "is valid";
        } else {
            Status.innerHTML = "is not valid";
        }
}

function ChekType(valueIn) {
    // перевожу значения с input в массив
    let inArr = valueIn.split('');
    let ArrCards = [
        { name: "masterCard", diapason: [51, 52, 53, 54, 55] },
        { name: "maestro", diapason: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763] },
        { name: "visa", diapason: [4] },
    ]
    // как добавить интервал чисел в массив diapason???
    // for (let i=2221; i<=2720; i++) {
    //         ArrCards[masterCard].value.push(i);
    //     }

    let typecart = ArrCards.find(el => el.diapason == inArr[i]);
    let rez = typecart.name;
    Status.innerHTML = rez;
    

}
