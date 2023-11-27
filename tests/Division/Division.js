let resultat = Float32Array;
function divide(Numb1 = Number, Numb2 = Number){
    try {
        resultat = Numb1 / Numb2
        if (resultat == Infinity || resultat == NaN)
        {
            throw new Error(console.log('Произошла ошибка в параметрах'));
        }
        else
        {
            return resultat
        }
    } 
    catch (e) {
        alert("Деление на 0 приводит к ∞")
    }
}
export {Numb1,Numb2,resultat,divide}
