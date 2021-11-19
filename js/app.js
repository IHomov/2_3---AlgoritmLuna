

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
    let namecard; // переменная для хранения имени типа банковской системы

    let byTwo = +valueIn.match(/.{1,2}/g)[0]; //разбиваю массив для дальнейшего сравнения на масив по 2 цифры
    let byFour = +valueIn.match(/.{1,4}/g)[0]; // по 4 цифры
    let byOne = +valueIn.match(/.{1,1}/g)[0]; //по 1 цифры

    let newArr = []; // массив из введенных чисел, который состоит из разбитого входящего числа по 2 цифры, по 4, по 1.
    newArr.push(byTwo, byFour, byOne);
    newArr.sort(function (a, b) {
        return b - a;
    });


    let paymentSystems = [
        { bin: 51, title: 'masterCard' },
        { bin: 5018, title: 'maestro' },
        { bin: 5020, title: 'maestro' },
        { bin: 5038, title: 'maestro' },
        { bin: 5893, title: 'maestro' },
        { bin: 6304, title: 'maestro' },
        { bin: 6759, title: 'maestro' },
        { bin: 6761, title: 'maestro' },
        { bin: 6762, title: 'maestro' },
        { bin: 6763, title: 'maestro' },
        { bin: 4, title: 'visa' },
    ]

    for (let i = 52; i <= 55; i++) {
        paymentSystems.push({ bin: i, title: "masterCard" });
    }
    
    for (let i = 2221; i <= 2720; i++) {
        paymentSystems.push({ bin: i, title: "masterCard" });
    }
    
    paymentSystems.sort(function (a, b) {
        return b.bin - a.bin;
    });


function FindEl(ArrayOne, id) {
        let findedEl = ArrayOne.find(el => el.bin == id);
        if (findedEl) {
            namecard = findedEl.title;
        }
        else {
            namecard = "another card";
        }        
    }



    for (let i = 0; i <= newArr.length; i++) {
        FindEl(paymentSystems, newArr[i]);
        if (namecard == "another card") {
            FindEl(paymentSystems, newArr[i + 1]);
        }
        else break;
        
    }
    return Typecard.innerHTML = namecard;
}

