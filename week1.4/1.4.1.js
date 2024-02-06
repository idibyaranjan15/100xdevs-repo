//call-back function


function sqaure(n){
    return n * n
}
let cube=(a)=>a*a*a


// function addOfSqaure(a,b){
//     val1= sqaure(a)
//     val2=  cube(b)
//     return val1+val2
// }
// let ans=addOfSqaure(1,2)
// console.log(ans)


let ans=(a,b,fn)=>{
    console.log(a);
    console.log(b)
    console.log(fn)
    let val1=fn(a)
    let val2=fn(b)
    return val1+val2
}
console.log(ans(1,2,cube))