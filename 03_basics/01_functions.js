
// function sayMyName(){
//      console.log("a");
//      console.log("y");
//      console.log("u");
//      console.log("s");
//      console.log("h");


// }
//sayMyName()

// function addTwoNumbers(number1, numbers){
//     console.log(number1 + number2);

// }
// addTwoNumbers(3, 4)

// function addTwoNumbers(number1, number2){
//     //let result = number1 + number2
//     //return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)
//console.log("result:", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("plss enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("ayush"));

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "ayush",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 500, 1000]));