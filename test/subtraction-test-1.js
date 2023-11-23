
function subtraction(num1, num2) {
    return num1 - num2;
}

let result = subtraction(7,5)
if (result === 2)
{
    console.log("[subtraction] Unit-test completed successfully. Input params: 7(num1); 5(num2). Output results:"+ result +" (result)")
} else {
    console.error("[subtraction] Unit-test failed. Error message: (ваше сообщение). Input params: 7(num1); 5(num2). Output results: " + result +"result")
}
