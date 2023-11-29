import { divide, Numb1, Numb2,flush,resultat } from "../Division";
let test1 = (divide(1,2,false))
if (test1 == 0.5 == resultat)
{console.log('Test1 Passed')}
else
{return console.log('0 passed, 5 presumably missed')}
Numb1 = 1;
Numb2 = 2;
let test2 = (divide(Numb1,Numb2,false))
if (test2 == 0.5 == resultat){
    console.log('Test2 Passed', +test2 ,0  +resultat)
}
else
{return console.log('1 passed, 4 presumably missed')}
let test3 = divide(0,1,false)
if (test3 == resultat)
{
    console.log('Test3 Passed' , +test3 , +resultat)
}
else
{
    console.log('2 passed, 3 presumably missed')
}
let test4 = divide(400000000000000,60000000000000,true) //Проверка Flush
if (Numb1 == Numb2 == resultat == test4 == 0){
    console.log('Test4 Passed',+test4,+resultat)
}
else
{return console.log('3 passed, 2 presumably missed')}
Numb1 = 3
let test5 = divide(Numb1,0,false)
if(test5 == 0 == resultat)
{
    console.log('Test5 Passed.')
}
else{
    return console.log('4 passed, 1 presumably missed')
}
