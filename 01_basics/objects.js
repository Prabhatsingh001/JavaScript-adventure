// singleton = 
// Object.create 

//  object literals
// const mysym = Symbol("key1")
// const js_user = {
//     name: "hitesh",
//     age: 18,
//     [mysym]:"hello",
//     location: "bhopal",
//     email: "prabhat@gmail.com",
//     isLoggedIn: false,
//     lastLoggin:["monday","tuesday"]
// }

// // console.log(js_user["email"]);
// // console.log(js_user.lastLoggin);

// // symbol :- a datatype in js
// js_user.greeting = function(){
//     console.log("hello world");
// }

// js_user.greetingTwo = function(){
//     console.log(`hello ${this.name}`);
// }

// console.log(js_user.greeting());
// console.log(js_user.greetingTwo());
// Object.freeze(js_user)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = {...obj1,...obj2}
console.log(obj3);