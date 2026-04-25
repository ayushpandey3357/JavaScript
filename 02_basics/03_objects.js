//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "ayush",
    "full name": "ayush pandey",
    [mySym]: "mykey1",
    age: 20,
    location: "UP",
    email: "ayushpandey1974@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());