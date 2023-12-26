import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest4(a, b) {
    let otv = exponentation(a, b)
    if (otv === 1) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}