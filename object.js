// let text="this is a string"
// let fruits=["Bunny",25,"Bhopal"];

// let obj ={
//     // key:value
//     Name:"Bunny",
//     Age:25,
//     City:"Bhopal"

// }
// console.log(obj); //to print full obj
// console.log(obj.Age)// to print any specific key 
// obj.college="VIT"; // to insert an object
// console.log(obj)
// obj.Age=28; // editing the existing key
// console.log(obj);
// delete obj.City; // for deleting the object
// console.log(obj)

// destrucutring : a way of unpacking values from objects into variables
// makes code better cleaner and easier to read
// allows quick access to object properties
// let student={
//     name:"john",
//     age:20,
//     city:"indore"
// }

// let {name,age} = student;
// console.log(name);
// console.log(age);

// Spread Operator: it is used to spread the elements of an object or array another object or array
// uses : merge objects or arrays
// copy exisitng objects/arrays into a new one

// let stu1={
//     name:"Jack",
//     age: 30
// }
// let stu2={
//     city:"Bhopal",
//     grade:"A"
// }

// // combining objects
// let comstu={...stu1, ...stu2};  ... is identification mark
// console.log(comstu);

// let p1=document.querySelector("#para")
// let p2=document.querySelector("#but")
// let okk=() =>{
//     if(p1){
//         p1.style.display="none"
//         p2.style
//     }
//     else {
//         p1.style.display="block"
// }

// }


// let book={
//     name: "Air",
//     age:"NA",
//     city:"Earth"
// }
// // for in loop for object

// for(let pro in book){
//     console.log(pro) // for taking out only keys
//     console.log(pro ," ",book[pro])
// }

// for of used in arrays and strings 
// let mob=["VIT","Btech","2nd"]
// for (let col of mob){
//     console.log(col)
// }

// let pro=[2,6,1,9,72,87]
// map :accesses,iterates,performs functions on every element of the array,and then returns array
// high order function: map is high order function here
// callback fucntion: passed in a parameter e to }
// let newpro=pro.map((e)=>{
//     return e*2
// })
// console.log(newpro);


// filter

let pro=[2,6,1,9,72,87]
// let newpro=pro.filter((e)=>{
//     return e>6;
// })
// console.log(newpro)

// for each: returns new string 
pro.forEach((e)=>{
    console.log(e%2);
    
})
