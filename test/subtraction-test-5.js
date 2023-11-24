function subtraction(num1, num2) {
    if (isNaN(num1) || num1 === undefined || num1 === Infinity || num1 === null || isNaN(num2) || num2 === undefined || num2 === Infinity || num2 === null){
        console.error("[subtraction] Unit-test failed. Error message: (Parameter is not a number). Input params: num1 = " + num1 + "; num2 = "+ num2 +". Output results: result = " + result)
        throw new Error("Parameter is not a number");
    } else
    {
    const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) ); // Функция считает количество знаков после запятой путём преобразования числа в строку, после чего считает кол-во знаков после символа "." В случае отсутствия оных, возвращает 0
    let n1 = f(num1)
    let n2 = f(num2)
    if (n1 > 0  || n2 > 0)
        {   
            if (n1 >= n2)
                return Number((num1 - num2).toFixed(n1))
            else 
                return Number((num1 - num2).toFixed(n2))
        
        } else {
            return num1 - num2
        }
    }
}
let num1 = -7.5
let num2 = -5.3
let result = subtraction(num1,num2)
if (result === -2.2)
{
    console.log("[subtraction] Unit-test completed successfully. Input params: num1 = " + num1 + "; num2 = "+ num2 +". Output results: result = " + result)
} else {
    console.error("[subtraction] Unit-test failed. Error message: (Некорректный результат). Input params: num1 = " + num1 + "; num2 = "+ num2 +". Output results: result = " + result)
}
