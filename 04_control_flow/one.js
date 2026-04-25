// // if
// const isUserLoggedIn = true
// const temperature = 41

// if( 2 === "2"){
//     console.log("executed");

// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("execute");
// //<, >, <=, >=, ==, !=, ===

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`USer power: ${power}`);
// }
// console.log(`USer power: ${power}`);

const balance = 1000

//if(balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true 
const LoggedInfromGoogle  = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
}
if(loggedInFromEmail || LoggedInfromGoogle){
    console.log("User logged  in");
}