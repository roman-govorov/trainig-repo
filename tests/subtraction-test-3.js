import {subtraction} from './subtraction.js'
export function subtractionTest3(num1, num2) {
    try {
        var result = subtraction(num1, num2)
    }
    catch(e)
    {
        console.error(e)
    }
}
