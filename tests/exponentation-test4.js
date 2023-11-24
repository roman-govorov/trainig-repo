import { exponentation } from '.calculator/exponentation.js'
export function exponentationTest4(num1, num2) {
    let otv = exponentation(num1, num2)
    if (otv === 1) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}