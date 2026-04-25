// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
       userfullname:{
         firstname: "ayush",
          lastname: "pandey"
       }
    }

}
//console.log(regularUser,fullname,userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ayush"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "ayush",
//     "coursename": "js in hindi",
//     "price": "free"
// }