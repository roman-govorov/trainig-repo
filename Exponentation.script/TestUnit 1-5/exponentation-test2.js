function exponentation(n1, n2) {
    return Math.pow(n1, n2);
}
let otv = exponentation(2, -5)
if (otv === 0.03125) {
    console.log("Successful test" + otv)
}
else {
    console.error("Test failed" + otv)
}