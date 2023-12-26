import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest3(a, b) {
    try {
        var otv = exponentation(a, b)
    }
    catch (r) {
        console.error(r)
    }
}