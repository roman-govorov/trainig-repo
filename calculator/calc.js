import { exponentation } from "./Exponentation.js";
import { subtraction } from "./subtraction.js";
let a = '';
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-', '+', '*', '/', '^', '(', ')'];
//экран
var out = document.getElementById('display');
function clearAll() {
    a = '';
    out.value = 0;
}

document.querySelector('.C').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //Нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //Нажато очищение C
    if (event.target.classList.contains('C')) return;
    a = out.value;
    //получаю нажатую кнопку
    const key = event.target.textContent;
    //если нажаты кнопки 0-9 или . 
    if (digit.includes(key)) {
        a += key;
        console.log(a);
        out.value = a;
    }
    return;
}


//нажато =
// if (key === '=') {
//     if (b === '') b = a;
//     switch (sign) {
//         case "^":
//             a = exponentation(a, b);
//             break;
//         case "-":
//             a = subtraction(a, b);
//             break;

//     }
//     finish = true;
//     out.value = a;
//     console.log(a, b, sign);
// }
