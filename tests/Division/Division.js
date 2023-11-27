let resultat = Float32Array;
let multiinput = false;
function divide(Numb1 = Number, Numb2 = Number, flush= false){
    try {
        if (flush = true)
        {
            Numb1 = Numb2 = resultat = 0;
            multiinput = false;
            return resultat;
        }
        
        if (Numb2 == Number || multiinput == false)
        {   multiinput= true
            return Numb1; // Если пользователь ещё не ввёл значение и нажимает на деление, то ему возвращается 1 результат
        }
        if (multiinput == true)
        {
            resultat = Numb1 / Numb2
            if (resultat == Infinity || resultat == NaN|| Numb1 ==Infinity || Numb2 ==Infinity)
            {
                throw new Error(console.log('Произошла ошибка в параметрах'));
            }
            else
            {
                return resultat;
            }
    } }
    catch (err) {
        alert("Деление на 0 приводит к ∞")
    }
}
export {Numb1,Numb2,resultat,flush,divide}
