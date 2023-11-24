import { exponentation } from '.calculator/exponentation.js'
export function exponentationTest2(num1, num2) {
    let otv = exponentation(num1, num2)
    if (otv === 0.03125) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}