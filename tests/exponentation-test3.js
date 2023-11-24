import { exponentation } from '.calculator/exponentation.js'
export function exponentationTest3(num1, num2) {
    let otv = exponentation(num1, num2)
    if (otv === -8) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}