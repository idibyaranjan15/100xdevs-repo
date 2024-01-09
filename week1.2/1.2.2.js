// print all the even number in the array
// let arr=[1,2,3,4,5,6,7,8,9,0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//          console.log(arr[i])
//     }
// }


//print the largest number in the array

// let arr=[10,20,50,1,89,12,45,90]
// let maxi=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>maxi){
//         maxi=arr[i]
//     }
// }
// console.log(maxi)

// in two complex object find the name of the guys whose gender is female
// let person=["ram","hari","seema"]
// let gender=["male","male","female"]

// for(let i=0;i<person.length;i++){
//     if(gender[i]=="female"){
//         console.log(person[i])
//     }
// }

//with using objects 
let allUsers=[{
    firstName:"dibya",
    gender:"male"
},{
    firstName:"mukund",
    gender:"male"
},{
    firstName:"Anushka",
    gender:"female"
},{
    firstName:"saiujjala",
    gender:"female"
}
]
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}