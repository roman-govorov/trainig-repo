import {subtraction} from '../calculator/subtraction.js';
export function subtractionTest1(num1, num2) {
    let result = subtraction(num1,num2)
    if (result === 2)
    {
        console.log("[subtraction] Unit-test completed successfully. Input params: num1 = " + num1 + "; num2 = "+ num2 +". Output results: result = " + result)
    } else {
        console.error("[subtraction] Unit-test failed. Error message: (Некорректный результат). Input params: num1 = " + num1 + "; num2 = "+ num2 +". Output results: result = " + result)
    }
}