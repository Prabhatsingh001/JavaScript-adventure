// singleton = 
// Object.create 

//  object literals
const mysym = Symbol("key1")
const js_user = {
    name: "hitesh",
    age: 18,
    [mysym]:"hello",
    location: "bhopal",
    email: "prabhat@gmail.com",
    isLoggedIn: false,
    lastLoggin:["monday","tuesday"]
}

// console.log(js_user["email"]);
// console.log(js_user.lastLoggin);

// symbol :- a datatype in js
js_user.greeting = function(){
    console.log("hello world");
}

js_user.greetingTwo = function(){
    console.log(`hello ${this.name}`);
}

console.log(js_user.greeting());
console.log(js_user.greetingTwo());
Object.freeze(js_user)

