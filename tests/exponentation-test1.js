import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest1(a, b) {
    let otv = exponentation(a, b)
    if (otv === 8) {
        console.log("Successful test" + otv)
    }
    else {
        console.error("Test failed try new" + otv)
    }
}
