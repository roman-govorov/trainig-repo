import { exponentationTest1 } from './exponentation-test1.js';
import { exponentationTest2 } from './exponentation-test2.js';
import { exponentationTest3 } from './exponentation-test3.js';
import { exponentationTest4 } from './exponentation-test4.js';
import { exponentationTest5 } from './exponentation-test5.js';
export class exponentationTest {
    static test1() {
        exponentationTest1(2, 3)
    }
    static test2() {
        exponentationTest2(2, -5)
    }
    static test3() {
        exponentationTest3(-2, 3)
    }
    static test4() {
        exponentationTest4(0, 0)
    }
    static test5() {
        var otv = exponentationTest5(NaN, undefined)
    }
}