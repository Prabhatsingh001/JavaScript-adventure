// const coding = ["js", "ruby", "python"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values) 

// for each doesnt return any value

const mynum = [1,2,3,4,5,6,7,8,9]

// const newsnums = mynum.filter((num)=>{
//     return num>4
// })

// console.log(newsnums);

const newnum = []
mynum.forEach((num)=>{
    if(num>4){
        newnum.push(num)
    }
})

const num = [1,2,3]

const sum = num.reduce(function(acc,cur_val){
    return acc+cur_val;
},0)

console.log(
    sum
);