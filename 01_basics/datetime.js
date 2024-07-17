let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.getMonth());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(`hi ${mydate}`);
// shallow copies:- properties share same reference
// deep copy :- do not share same reference

const newarr = ["hello", "hi", "raghav"]

const all = [...newarr]
console.log(all);