import { exponentation } from '../calculator/Exponentation.js'
export function exponentationTest3(n1, n2) {
    try {
        var otv = exponentation(n1, n2)
    }
    catch (r) {
        console.error(r)
    }
}