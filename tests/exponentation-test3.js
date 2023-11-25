import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest3(n1, n2) {
    let otv = exponentation(n1, n2)
    if (otv === -8) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed" + otv)
    }
}