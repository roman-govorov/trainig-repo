import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest2(a, b) {
    let otv = exponentation(a, b)
    if (otv === 0.03125) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}