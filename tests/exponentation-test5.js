import { exponentation } from '.calculator/exponentation.js'
export function exponentationTest3(num1, num2) {
    try {
        var otv = exponentation(num1, num2)
    }
    catch (r) {
        console.error(r)
    }
}