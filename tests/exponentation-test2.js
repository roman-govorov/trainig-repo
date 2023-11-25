import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest2(n1, n2) {
    let otv = exponentation(n1, n2)
    if (otv === 0.03125) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}