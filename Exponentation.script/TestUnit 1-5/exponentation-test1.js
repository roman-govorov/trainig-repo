function exponentation(n1, n2) {
    return Math.pow(n1, n2);
}
let otv = exponentation(2, 3)
if (otv === 8) {
    console.log("Successful test" + otv)
}
else {
    console.error("Test failed" + otv)
}