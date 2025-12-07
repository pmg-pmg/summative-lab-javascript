const history=[];
function add(num1,num2){
const addition=num1+num2
history.push(addition)
}
function subtract(num1,num2){
const subtraction=num1-num2
history.push(subtraction)
}
function multiply(num1,num2){
const multiplication=num1*num2
history.push(multiplication)
}
function divide(num1,num2){
    if (num2=0){
        console.log(enter valid number)
    }else{
const division=num1/num2}
history.push(division)
}
function updateHistory{

}
function displayHistory{
    if (history>=1){
console.log(history)
    }
    else{
        console.log("Sorry, you have no stored calculations")
    }
}