import {subtractionTest1} from './subtraction-test-1.js'
import {subtractionTest2} from './subtraction-test-2.js'
import {subtractionTest3} from './subtraction-test-3.js'
import {subtractionTest4} from './subtraction-test-4.js'
import {subtractionTest5} from './subtraction-test-5.js'
export class subtractionTest {
    static test1() {
        subtractionTest1(7,5)
    }
    static test2() {
        subtractionTest2(0.2, 0.1)
    }
    static test3() {
        var result = subtractionTest3(NaN, undefined)
    }
    static test4() {
        subtractionTest4(-7,5)
    }
    static test5() {
        subtractionTest5(-7.5,-5.3)
    }
}